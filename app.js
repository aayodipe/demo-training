require('dotenv').config()
const fs = require('fs');
const msg = require('./note.js')
const validator = require('validator');
const chalk = require('chalk')

console.log(msg())
console.log(chalk.red('wrong'));
console.log(chalk.green('success'))
console.log(chalk.red.inverse.green('blue'))
console.log(chalk.blue.bold('Hello') + ' World' + chalk.red('!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.blue.bgRed('Hello world!'));
console.log(chalk.bold('Hello world!'));
console.log(chalk.blue('Hello world!'));
const warning = chalk.keyword('purple')

console.log(warning('Warning!'));