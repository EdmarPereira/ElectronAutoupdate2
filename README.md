# Electron auto updater

**Commands to run release.**

MAC ==> GH_TOKEN=e81af66ccf691f5a93610404acd59bc714578607 npm run release

WIN ==> setx GH_TOKEN "e81af66ccf691f5a93610404acd59bc714578607" npm run release

**Place of logger**
on Linux: ~/.config/{app name}/logs/{process type}.log
on macOS: ~/Library/Logs/{app name}/{process type}.log
on Windows: %USERPROFILE%\AppData\Roaming\{app name}\logs\{process type}.log
