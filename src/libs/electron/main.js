const electron = require('electron')
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
    event.reply('get-chart', {})
  })

  ipcMain.on('close-application', event => {
    process.exit()
  })
})
