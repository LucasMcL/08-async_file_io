#!/usr/bin/env node

const { readFile } = require('fs')
const fileName = process.argv[2]

// readFile(fileName, 'utf8', (err, data) => {
// 	try	{
// 		process.stdout.write(data)
// 		console.log('readFile complete')
// 	} catch(err) {
// 		console.error(err)
// 	}
// })

try {
	readFile(fileName, 'utf8', (err, data) => {
		if(err) throw 'myError'
	})
} catch(err) {
	console.log('catch block')
	console.error(err)
}

setTimeout(function() {console.log("We caught the error!  (Or there wasn't one)")}, 300)
