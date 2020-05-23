const tulind = require('tulind')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const MonkeySet = require('../../monkeyset')
const monkeyset = new MonkeySet()
monkeyset.Random.setsFill(555)

function stringifyNumber(n) {
  var special = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth']
  if (n < 20) return special[n]
  if (n % 10 === 0) return [''][Math.floor(n / 10) - 2] + 'ieth'
  return [''][Math.floor(n / 10) - 2] + 'y-' + special[n % 10]
}

const generate = async () => {
  let jsdoc = ``

  // ANALYZERS

  // INDICATORS
  for (let indicator in tulind.indicators) {
    const indicatorFunction = tulind.indicators[indicator]

    let example = ` * @example\n`

    let options = []

    jsdoc += `
  /**
   * @Summary ${tulind.indicators[indicator]['full_name']}
   * @name MonkeySet.Indicator#${indicator}
   * @function
   * @param options {object} Options to pass along to the ${indicatorFunction.type} function
  `
    for (let optionName of indicatorFunction.option_names) {
      let newOption = 6
      if (optionName == 'short period') newOption = 2
      if (optionName == 'medium period') newOption = 4
      if (optionName == 'long period') newOption = 6
      if (indicator == 'vidya') {
        if (optionName == 'short period') {
          newOption = 2
        }
        if (optionName == 'long period') {
          newOption = 5
        }
        if (optionName == 'alpha') {
          newOption = 0.2
        }
      } else {
        if (optionName == 'alpha') {
          newOption = 4.49
        }
      }
      if (optionName == 'acceleration factor step') {
        newOption = 3.4
      }
      if (optionName == 'acceleration factor maximum') {
        newOption = 5.351
      }

      jsdoc += ` * @param options.${optionName} {${typeof newOption}} The ${optionName} option 
  `

      if (indicator == 'macd') {
        // {'short period': 6, 'long period': 6, 'signal period': 6, real: 'close'}
        if (optionName == 'short period') newOption = 2
        if (optionName == 'long period') newOption = 4
        if (optionName == 'signal period') newOption = 6
      }

      if (optionName.indexOf(' ') !== -1) optionName = `'${optionName}'`
      options.push(`${optionName}: ${newOption}`)
    }

    let inputIndex = 1
    for (let inputName of indicatorFunction.input_names) {
      if (inputName == 'open') continue
      if (inputName == 'high') continue
      if (inputName == 'low') continue
      if (inputName == 'close') continue
      if (inputName == 'volume') continue
      let value = 'close'
      if (inputIndex == 2) value = 'open'
      if (inputName == 'real') options.push(`input${inputIndex}: '${value}'`)
      jsdoc += ` * @param options.input${inputIndex} {array} The ${stringifyNumber(inputIndex)} input\n`
      inputIndex++
    }

    for (let outputName of indicatorFunction.output_names) {
      jsdoc += ` * @returns ${outputName} - {array} the result from ${indicator}
  `
    }

    if (options.length >= 1) options = `{${options.join(', ')}}`
    const run = await eval(`monkeyset.fetch('sets').last(12).ohlc().${tulind.indicators[indicator].name}(${options})`)
    example += ` * const result = await monkeyset.fetch('sets').last(12).ohlc().${tulind.indicators[indicator].name}(${options})\n`
    example += ` * \n`
    example += ` * result = ${JSON.stringify(run, null, 4)}`
    jsdoc += example
    jsdoc += ` */`
  }

  fs.writeFileSync(path.join(__dirname, 'generated.js'), jsdoc)
}

generate()
