start sh.exe  -c "mongod --dbpath data/db"
start sh.exe  -c "grunt serve"
sh.exe  -c "supervisor -w backend,utils,lib,config,server -e coffee,js server.js"
