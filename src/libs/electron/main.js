const electron = require('electron')
const fs = require('fs')
const path = require('path')
const { ipcMain, app, BrowserWindow } = require('electron')

app.on('ready', async () => {
  await new Promise(resolve => setTimeout(resolve, 100)) // transparency workaround
  const { screen } = require('electron')
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  let win = new BrowserWindow({
    width: width - 200,
    height: height - 100,
    frame: false,
    transparant: true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')

  ipcMain.on('get-chart', event => {
    event.reply('get-chart', {
      ohlc: JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'))
    })
    event.reply('do-action', JSON.parse(fs.readFileSync(path.join(__dirname, 'action.json'), 'utf8')))
  })

  ipcMain.on('close-application', event => {
    process.exit()
  })
})
