const component = require('../classes/component')
const fs = require('fs')
const path = require('path')
const electron = require('electron')
const asTable = require('as-table')
const { spawn } = require('child_process')
const exporter = require('highcharts-export-server')

/**
 * @summary The Render component handles ways of displaying MonkeySet data
 * @memberof MonkeySet
 */
class Render extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)

    this.monkeyset.chain.chart = this.chart
    this.monkeyset.chain.picture = this.picture
    this.monkeyset.chain.table = this.table
  }

  /**
   * @summary Plots a MonkeySet to ASCII table
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Views the sets
   * await monkeyset.fetch('sets').chart()
   */
  table() {
    const json = JSON.parse(this.json())
    let returnTable = []

    // TODO: make this more dynamic?
    // refactor core monkeyset data sets structure maybe?

    if (this.dataformat === 'native') {
      if (this.selector === 'column') {
        for (let i = 0; i <= json.length - 1; i++) {
          returnTable[i] = {}
          returnTable[i][this.columnSelector] = json[i]
        }
      }
      if (this.selector === 'sets') {
        for (let i = 0; i <= json.length - 1; i++) {
          returnTable.push({ time: json[i][0], open: json[i][1], high: json[i][2], low: json[i][3], close: json[i][4], volume: json[i][5] })
        }
      }
    }
    if (this.dataformat === 'ohlc' && this.selector === 'sets') {
      for (let i = 0; i <= json['open'].length; i++) {
        returnTable.push({
          time: json['time'][i],
          open: json['open'][i],
          high: json['high'][i],
          low: json['low'][i],
          close: json['close'][i],
          volume: json['volume'][i]
          // rsi: json['rsi'][i] // TODO: make dynamic
        })
      }
    }

    return asTable(returnTable)
  }

  /**
   * @summary Plots a MonkeySet to electron for viewing real-time
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Views the sets
   * await monkeyset.fetch('sets').chart()
   */
  chart() {
    return new Promise(async (resolve, reject) => {
      const electron = require('electron')
      const proc = require('child_process')
      const electronPath = path.join(__dirname, '../', 'libs', 'electron')
      fs.writeFileSync(path.resolve(electronPath, 'action.json'), JSON.stringify({ action: 'chart' }))
      fs.writeFileSync(path.resolve(electronPath, 'data.json'), this.json())
      const child = proc.spawn(electron, [path.resolve(electronPath)], {
        stdio: 'inherit',
        windowsHide: false
      })
    })
  }

  /**
   * @summary Plots a MonkeySet in a chart, exporting it to SVG in base64 encoding
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Views the sets
   * await monkeyset.fetch('sets').picture()
   */
  picture(type = 'png') {
    return new Promise(async (resolve, reject) => {
      // split the data set into ohlc and volume
      const data = JSON.parse(this.json())
      const ohlc = []
      const volume = []
      const dataLength = data.open.length
      // set the allowed units for data grouping
      const groupingUnits = [
        [
          'week', // unit name
          [1] // allowed multiples
        ],
        ['month', [1, 2, 3, 4, 6]]
      ]

      for (let i = 0; i < dataLength; i += 1) {
        ohlc.push([
          data['time'][i], // the date
          data['open'][i], // open
          data['high'][i], // high
          data['low'][i], // low
          data['close'][i] // close
        ])

        volume.push([
          data['time'][i], // the date
          data['volume'][i] // the volume
        ])
      }

      let exportSettings = {
        type: type,
        options: {
          rangeSelector: {
            selected: 1
          },

          title: {
            text: 'OHLC'
          },

          yAxis: [
            {
              labels: {
                align: 'right',
                x: -3
              },
              title: {
                text: 'OHLC'
              },
              height: '60%',
              lineWidth: 2,
              resize: {
                enabled: true
              }
            },
            {
              labels: {
                align: 'right',
                x: -3
              },
              title: {
                text: 'Volume'
              },
              top: '65%',
              height: '35%',
              offset: 0,
              lineWidth: 2
            }
          ],

          tooltip: {
            split: true
          },

          series: [
            {
              type: 'candlestick',
              name: 'OHLC',
              data: ohlc,
              dataGrouping: {
                units: groupingUnits
              }
            },
            {
              type: 'column',
              name: 'Volume',
              data: volume,
              yAxis: 1,
              dataGrouping: {
                units: groupingUnits
              }
            }
          ]
        }
      }

      exporter.initPool()
      exporter.export(exportSettings, function(err, res) {
        if (err) {
          return reject(new Error(err))
        }
        exporter.killPool()
        return resolve(res)
      })
    })
    // return new Promise(async (resolve, reject) => {
    //   const electron = require('electron')
    //   const proc = require('child_process')
    //   const electronPath = path.join(__dirname, '../', 'libs', 'electron')
    //   fs.writeFileSync(path.resolve(electronPath, 'action.json'), JSON.stringify({ action: 'picture' }))
    //   fs.writeFileSync(path.resolve(electronPath, 'data.json'), this.json())
    //   const child = proc.spawn(electron, [path.resolve(electronPath)], {
    //     stdio: 'inherit',
    //     windowsHide: false
    //   })
    // })
  }
}

module.exports = Render
