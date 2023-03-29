// Every file is module (CommonJS)
// Module - Encapsulated code (only share minimum)
// When imports module, not only importing, it also invokes (executes)
// If there is a function called, it will call.
const moduleName = require('./2-1-module')

console.log(moduleName.name)


// Major Modules in node
// - OS (operating system)
// - PATH
// - FS (file system)
// - HTTP