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

//process.argv  get the input from the user in console
//process.argv[2] example of index 2, that is the first user input after node and app.js path
console.log(process.argv[2])