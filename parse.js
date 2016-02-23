var fs = require('fs');
var lo = require('lodash');

fs.readFile('data.txt', 'utf8', function(err, contents) {
    var output = contents.split('<rect ');

    var out = fs.createWriteStream('data.log');

    lo.forEach(output, function(line){
        out.write('<rect ' + line + '\n');
    });

    out.end();
});
