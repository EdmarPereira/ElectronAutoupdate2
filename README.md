# Electron auto updater

**Commands to run release.**

MAC ==> GH_TOKEN=ToKEN npm run release

WIN ==> setx GH_TOKEN "TOKEN" npm run release

**Place of logger**
on Linux: ~/.config/{app name}/logs/{process type}.log
on macOS: ~/Library/Logs/{app name}/{process type}.log
on Windows: %USERPROFILE%\AppData\Roaming\{app name}\logs\{process type}.log
