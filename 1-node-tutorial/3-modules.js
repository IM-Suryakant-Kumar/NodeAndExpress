// CommonJS, every file is modul (by default)
// Modules- Ecapsulated Code (only share minimum);
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
sayHi("suasn");
sayHi(names.john);
sayHi(names.peter);