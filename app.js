const utils = require('./utils')
const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')

//write data in file sync (name, content)
fs.writeFileSync('notes.txt','This file was created by Node.js.')

//Append data to file sync
fs.appendFileSync('notes.txt',' Written by Jorge')

console.log(utils.add(1,4))

console.log(utils.getNotes())

console.log(validator.isEmail('joelias@example.com'))

console.log(chalk.green('Success !'))