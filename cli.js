#!/usr/bin/env node
'use strict';
var meow = require('meow');
var cstimerTxtToJson = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ cstimer-txt-to-json [input] -o [output-file-name] --session sessionNumber --verbose',
    '',
    'Examples',
    '  $ cstimer-txt-to-json exportedTime.txt -o cstimer.txt',
    'Options',
    '  -o         Output file name.                         Default: cstimer.txt',
    '  --session  Session number of csTimer to import into. Default: 1',
    '  --verbose  To print debug output as well.            Default: false',
    ''
  ]
});

cstimerTxtToJson(cli.input[0], cli.flags);
