var esprima = require('esprima'),
	esnode = require('./index'),
	jsonfile = require('jsonfile'),
	fs = require('fs');
var srcCode = fs.readFileSync('./tester.js');
var ast = esprima.parse(srcCode.toString(), {
    loc: true
});
var _finds = []
var _f = esnode(ast).query('body[1].expression.arguments[0]', function(value, obj){
	_finds.push(value);
});

jsonfile.writeFile('./file.json', _finds, {spaces: 4}, function (err) {
  console.error(err)
})
