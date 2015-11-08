"use strict";

var fs = require("fs");

function countCharsByChar(file){
	var hash = {};
	var file = file.toUpperCase();
	for(let letter in file){
		if(hash[file[letter]]===undefined){
			hash[file[letter]] = 1;
		}else{
			hash[file[letter]]++;
		}
	}
	return hash;
}

function readCountCharsWriteTextFileWithFS(filepath){
	fs.readFile(filepath+'.txt', 'utf8', function (err,data) {
  		if (err) {
    		return console.log(err);
	  	}
	  	var hash = countCharsByChar(data);
		var keys = [];
		for(let key in hash){
			if(hash.hasOwnProperty(key)){
				keys.push(key);
			}
		}
		keys.sort();
		var output = "";
		for(let key in keys){
			output+=keys[key]+": "+hash[keys[key]]+"\n";
		}
		fs.writeFile(filepath+"_output.txt", output, function(err) {
			if(err) {
				return console.log(err);
			}
		}); 
	});
}

readCountCharsWriteTextFileWithFS("sample_text");
