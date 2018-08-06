'use strict';

const fs = require('fs');

let files = [
'algorithms.json',
'data-structures.json',
'project-euler.json',
'rosetta-code.json',
]

for (let file of files){
	let rawdata = fs.readFileSync(file);  
	let data = JSON.parse(rawdata);
	for (let challenge of data.challenges) {
		challenge['videoUrl'] = ''
	}
	let dataString = JSON.stringify(data, null, 2)
	console.log(dataString);  
	fs.writeFileSync(file, dataString)
}


