# cstimer-txt-to-json

> My gnarly module

[![Build Status](https://travis-ci.org/icyflame/cstimer-txt-to-json.svg?branch=master)](https://travis-ci.org/icyflame/cstimer-txt-to-json)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --save cstimer-txt-to-json
```


## Usage

```js
var cstimerTxtToJson = require('cstimer-txt-to-json');

cstimerTxtToJson('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global cstimer-txt-to-json
```
```
$ cstimer-txt-to-json --help

  Usage
    cstimer-txt-to-json [input]

  Example
    cstimer-txt-to-json
    unicorns & rainbows

    cstimer-txt-to-json ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### cstimerTxtToJson(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
