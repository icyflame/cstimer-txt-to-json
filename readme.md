# cstimer-txt-to-json

> Convert csTimer text export to csTimer import format

TL; DR This module will convert  [this](https://gist.github.com/icyflame/c81780abc2936f8a157f/raw/dc17844a7309778eed3d6fdb2f4c01bfb0c576ca/cstimer-original.txt) to [this](https://gist.githubusercontent.com/icyflame/c81780abc2936f8a157f/raw/dc17844a7309778eed3d6fdb2f4c01bfb0c576ca/corrected-csTimer-import.txt)

<!-- [![Build Status](https://travis-ci.org/icyflame/cstimer-txt-to-json.svg?branch=master)](https://travis-ci.org/icyflame/cstimer-txt-to-json) -->

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --global cstimer-txt-to-json
```


## CLI

```
$ npm install --global cstimer-txt-to-json
```
```
$ cstimer-txt-to-json --help

  Usage
    $ cstimer-txt-to-json [input] -o [output-file-name] --session sessionNumber --verbose

  Examples
    $ cstimer-txt-to-json exportedTime.txt -o cstimer.txt
  Options
    -o         Output file name.                         Default: cstimer.txt
    --session  Session number of csTimer to import into. Default: 1
    --verbose  To print debug output as well.            Default: false
```


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
