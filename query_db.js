const Database = require('C:/Users/user/AppData/Roaming/npm/node_modules/omniroute/node_modules/better-sqlite3');
const db = new Database('C:/Users/user/.omniroute/storage.sqlite');
console.log('Tables:');
console.log(db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all());
