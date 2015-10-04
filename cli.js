#!/usr/bin/env node
'use strict';
var meow = require('meow');
var cstimerTxtToJson = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ cstimer-txt-to-json [input]',
    '',
    'Examples',
    '  $ cstimer-txt-to-json',
    '  unicorns & rainbows',
    '',
    '  $ cstimer-txt-to-json ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

cstimerTxtToJson(cli.input[0], cli.flags);
