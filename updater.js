const { autoUpdater } = require('electron-updater')

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"

module.exports = () => {
    // console.log('cheking for updates')
    autoUpdater.checkForUpdates()
}