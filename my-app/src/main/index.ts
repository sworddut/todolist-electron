import { app, shell, BrowserWindow, ipcMain, screen } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

const windowWidth = 400 * 2
const windowHeight = 400

function createWindow(): void {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  console.log(width, height)

  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    show: false, // 初始隐藏窗口
    autoHideMenuBar: true,
    frame: false, // 去除标题栏
    transparent: true, // 透明效果
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  const setNormal = ():void => {
    mainWindow.setBounds({
      x: width - windowWidth / 2,
      y: (height - windowHeight) / 2,
      width: windowWidth,
      height: windowHeight
    })
  }
  setNormal()

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  ipcMain.on('close-window', () => {
    console.log('close-window')
    mainWindow.close()
  })

  ipcMain.on('mouseenter', (_, mousePosition) => {
    console.log('mouseenter', mousePosition)
  })

  ipcMain.on('mouseleave', (_, mousePosition) => {
    console.log('mouseleave', mousePosition)
  })

  // HMR for renderer base on electron-vite cli.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
