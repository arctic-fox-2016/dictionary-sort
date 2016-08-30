function sort(dictionary) {

  dictionary.sort();

}



var arr = [];
// Your code here to sort the array
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Add> '
});

rl.prompt();
console.log("type word :");
rl.on('line', (line) => {

  if (line =="") {

    console.log(arr.sort());


    rl.close();
  }
  else {
    arr.push(line);
  }

});


//dictionary_sort();
