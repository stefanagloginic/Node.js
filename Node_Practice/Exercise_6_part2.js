var fs = require('fs');
var path = require('path');

module.exports = function (directory_name, file_extension, callback_func) {  

  fs.readdir(directory_name, function(err, list){ //asynchronous call ... process.argvp[2] is the directory specifics..

    if(err){ //if err is true then i want to print that there was an error..
      return callback_func(err);
    }

    var og_arg = file_extension;
    var filtered_list = [];

    for(var i = 0; i < list.length; i++){

      var second_args = path.extname(list[i]); //returns .filetype
      second_args = second_args.substring(1, second_args.length) //want just filetype...no .

      if(og_arg === second_args){
        filtered_list.push(list[i]); //save the file that has the matching extension.
      }
    }

    return callback_func(null, filtered_list); //so long as there is no error, return the callback function with the filled list.

  });
}