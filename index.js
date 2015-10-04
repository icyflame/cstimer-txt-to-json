'use strict';
module.exports = function (str, opts) {
  var fs = require('fs');
  var log = require('npmlog');
  var revHash = require('rev-hash');

  var inputFilename = str;
  var outputFilename = opts.o || 'cstimer.json';

  if (opts.verbose || opts.v || opts.verbose) {
    log.level = 'verbose';
  }

  var sessionName = 'session' + (opts.session || 5);

  log.verbose('inputFileName', inputFilename);
  log.verbose('outputFilename', outputFilename);

  var numberOfSolves = 0;

  var jsonObject = {};

  jsonObject['properties'] = '{"font":"r","color":"6","col-font":"#ffffff","col-back":"#222277","col-board":"#99cc33","col-button":"#556633","col-link":"#558800","col-logo":"#ddaadd","col-logoback":"#000000","useIns":true,"input":"t","timeU":"u","preTime":300,"phases":1,"showAvg":true,"timerSize":20,"smallADP":true,"bgImgO":25,"bgImgS":"n","useMilli":false,"timeFormat":"h","preScr":"","zoom":1,"scrSize":15,"scrMono":true,"scrLim":true,"scrType":"333ni","scramble":true,"disPrec":"a","printScr":true,"imrename":false,"scr2ss":false,"ss2scr":true,"stat1t":0,"stat1l":5,"stat2t":0,"stat2l":12,"delmul":true,"sessionN":15,"sessionName":"{\\"1\\":1,\\"2\\":2,\\"3\\":3,\\"4\\":4,\\"5\\":5,\\"6\\":6,\\"7\\":7,\\"8\\":8,\\"9\\":9,\\"10\\":10,\\"11\\":11,\\"12\\":12,\\"13\\":13,\\"14\\":14,\\"15\\":15}","sessionScr":"{\\"1\\":\\"333\\",\\"2\\":\\"333ni\\",\\"3\\":\\"333\\",\\"4\\":\\"333\\",\\"5\\":\\"333\\",\\"6\\":\\"333\\",\\"7\\":\\"333\\",\\"8\\":\\"333\\",\\"9\\":\\"333\\",\\"10\\":\\"333\\",\\"11\\":\\"333\\",\\"12\\":\\"333\\",\\"13\\":\\"333\\",\\"14\\":\\"333\\",\\"15\\":\\"333\\"}","session":2,"stats":true,"imgSize":15,"NTools":1,"toolsfunc":"[\\"distribution\\",\\"stats\\",\\"cross\\",\\"distribution\\"]","tools":false,"useKSC":true}';
  jsonObject[sessionName] = [];

  fs.readFile(inputFilename, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      log.verbose(data.toString());
      log.verbose(typeof data);
      var lines = data.toString().split('\n');
      var nextline = false;
      for (var index in lines) {
        if (lines[index].match(/Time\sList/g)) {
          nextline = true;
          continue;
        }
        if (nextline) {
          // start reading the times
          var line = lines[index];

          // regex from txt2re.com

          var re1 = '.*?'; // Non-greedy match on filler
          var re2 = '([+-]?\\d*\\.\\d+)(?![-+0-9\\.])'; // Float 1
          var re3 = '.*?'; // Non-greedy match on filler
          var re4 = '((?:[a-z][a-z]*[0-9]+[a-z0-9]*))'; // Alphanum 1
          var re5 = '(\\s+)'; // White Space 1

          var p = new RegExp(re1 + re2 + re3 + re4 + re5, ['i']);
          var m = p.exec(line);

          // ensure that the match does exist

          if (!m || m.length < 4) {
            continue;
          }

          // extract required information from the match

          var solvetime = parseFloat(m[1]);
          var scramble = line.substr(line.indexOf(' ', line.indexOf(' ') + 1) + 3, line.length);
          log.verbose('matchLength', m.length);
          log.verbose('solvetime', solvetime);
          log.verbose('typeof solvetime', typeof solvetime);
          log.verbose('scramble', scramble.toString());
          numberOfSolves += 1;

          // create the solve object for this particular solve

          var solveObject = [[0, solvetime * 1000], scramble, ''];
          log.verbose('solve object', solveObject);
          jsonObject[sessionName].push(solveObject);
        }
      }
    }
    log.verbose('Number of Solves', numberOfSolves);
    log.verbose(jsonObject);

    jsonObject[sessionName] = JSON.stringify(jsonObject[sessionName]);

    fs.writeFileSync(outputFilename, JSON.stringify(jsonObject));

    var buffer = fs.readFileSync(outputFilename);
    var revid = revHash(buffer);
    fs.rename(outputFilename, outputFilename.split('.')[0] + '-' + revid + '.txt');
  });
};
