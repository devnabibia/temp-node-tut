 //commonJS, every file is module (by default)
//modules - Encapsulated code (only share minimum)
const names = require('./4-name')
const sayHi = require('./5-utilis')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)