function dictionary_sort(item) {
  var values, i, j;

  for (i = 0; i < item.length ; i++) {
      values = item[i];
      for (j = i-1; j > -1 && item[j] > values ; j-- ) {
        // shift array
        item[j+1] = item[j];
      }
      item[j+1] = values;
  }
  return item;
}



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Type another word : ')

var inputText = new Array();

console.log('type word: ')

rl.on('line', (line) => {
   if (line == "") {
     rl.close()
   } else {
    inputText.push(line);
    rl.prompt();
  }
}).on('close',() => {
  console.log(inputText);
  console.log("Congratulation! You dictionary has : " + inputText.length + " word(s)" + '\n' +   dictionary_sort(inputText) );
})
