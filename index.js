#!/usr/bin/env node

var read = require('read')
var argv = require('minimist')(process.argv.slice(2))

if (argv.h || argv.help) {
  console.log([
    'usage: sure [-q|--question <question>] [-y|--yes <answer>]',
    '',
    'options:',
    '  -q --question <question>    The question to ask the user. Will use default if not supplied',
    '  -y --yes <answer>           What will be accepted as a yes. "y" by default',
    '  -h --help                   Print this list and exit.'
  ].join('\n'))
  process.exit()
}

var question = argv.q || argv.question || 'Are you sure? [y/n]'
var yes = argv.y || argv.yes || 'y'

read({prompt: question}, function (error, result, isDefault) {
  if (error) {
    throw new Error('Something went wrong!')
  }

  if (result === yes) {
    process.exit()
  }

  process.exit(1)
})
