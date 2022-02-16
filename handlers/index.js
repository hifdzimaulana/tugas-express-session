const glob = require('glob')
const path = require('path')

var options = {
    cwd: './handlers', // relative to root dir
    ignore: [
        path.basename(__filename) // ignoring this file (index.js)
    ]
}

// glob.sync means the process will be done sychronously
glob.sync('*.js', options).forEach(file => {
    module.exports[path.basename(file, '.js')] = require('./' + file)
})

// The output will be the same as these

/* exports.login = require('./login')
* exports.logout = require('./logout)
* exports.register = require('./register)
*/
