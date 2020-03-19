const { autoUpdater } = require("electron-updater");
const { dialog } = require("electron");

autoUpdater.logger = require("electron-log");
autoUpdater.logger.transports.file.level = "info";

module.exports = () => {
  // console.log('cheking for updates')
  autoUpdater.checkForUpdates();

  autoUpdater.on("update-available", () => {
    dialog.showMessageBox(
      {
        type: "info",
        title: "Update available",
        message: "A new version is available. Do you want to update now?",
        buttons: ["Update", "No"]
      },
      buttonIndex => {
        if (buttonIndex === 0) autoUpdater.downloadUpdate();
      }
    );
  });

  autoUpdater.on('update-downloaded', () => {
      dialog.showMessageBox({
          type: 'info',
          title: 'Update ready',
          message: 'Install and restart now?',
          buttons: ['Yes', 'Later']
      }, buttonIndex => {
          if (buttonIndex === 0) autoUpdater.quitAndInstall(false, true)
      })
  })
};
