// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const greeting = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
greeting('brian')
greeting(names.john)
greeting(names.peter)
  