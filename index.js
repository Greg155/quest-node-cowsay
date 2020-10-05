const myInformation = require('./information.js');
var cowsay = require("cowsay");

console.log(myInformation);

console.log(cowsay.say({
	text : "I'm a wiiiiilder !",
	e : "oO",
	T : "U "
}));

