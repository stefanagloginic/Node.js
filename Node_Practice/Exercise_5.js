/*

  Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a directory
  name as the first argument to your program (e.g. '/path/to/dir/') and a
  file extension to filter by as the second argument.

  For example, if you get 'txt' as the second argument then you will need to
  filter the list to only files that end with .txt. Note that the second
  argument will not come prefixed with a '.'.

  Keep in mind that the first arguments of your program are not the first
  values of the process.argv array, as the first two values are reserved for
  system info by Node.

  The list of files should be printed to the console, one file per line. You
  must use asynchronous I/O.

 ─────────────────────────────────────────────────────────────────────────────

 ## HINTS

  The fs.readdir() method takes a pathname as its first argument and a
  callback as its second. The callback signature is:

     function callback (err, list) { }

  where list is an array of filename strings.

   You may also find node's path module helpful, particularly the extname
  method.
*/

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){ //asynchronous call ... process.argvp[2] is the directory specifics..

	if(err){ //if err is true then i want to print that there was an error..
		return console.error(err);
	}

	var og_arg = process.argv[3];

	for(var i = 0; i < list.length; i++){

		var second_args = path.extname(list[i]); //returns .filetype
		second_args = second_args.substring(1, second_args.length) //want just filetype...no .

		if(og_arg === second_args){
			console.log(list[i]); //print the entire file in the list if the extension matches what the user specified.
		}
	}

});