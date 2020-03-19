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

  // autoUpdater.on('update-downloaded', () => {
  //     dialog.showMessageBox({
  //         type: 'info',
  //         title: 'Update ready',
  //         message: 'Install and restart now?',
  //         buttons: ['Yes', 'Later']
  //     }, buttonIndex => {
  //         if (buttonIndex === 0) autoUpdater.quitAndInstall(false, true)
  //     })
  // })

  autoUpdater.on('update-downloaded', (ev, info) => {
    setImmediate(() => {
        let iChoice = dialog.showMessageBox({
            type: 'question',
            message: oTrad['on-update-downloaded'],
            buttons: [oTrad['quit_and_install'], oTrad['install_later']]
        });
        // if (iChoice === 0) {
        //     setImmediate(() => {
        //         var browserWindows = BrowserWindow.getAllWindows();
        //         browserWindows.forEach(function(browserWindow) {
        //             browserWindow.destroy();
        //         });
        //         autoUpdater.quitAndInstall();
        //     })
        // }

        if (iChoice === 0) {
          setImmediate(() => {
             app.removeAllListeners("window-all-closed")
             autoUpdater.quitAndInstall(false)
           })
         }
    });
});
};
