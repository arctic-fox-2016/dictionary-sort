function dictionary_sort(item) {
  return item.sort();
}

function dictionary_sort2(item) {
  // Your code here to sort the array
  var len     = item.length,     // number of items in the array
      value,                      // the value currently being compared
      i,                          // index into unsorted section
      j;                          // index into sorted section

  for (i=0; i < item.length; i++) {

      // store the current value because it may shift later
      value = item[i];

      /*
       * Whenever the value in the sorted section is greater than the value
       * in the unsorted section, shift all items in the sorted section over
       * by one. This creates space in which to insert the value.
       */
      for (j=i-1; j > -1 && item[j] > value; j--) {
          item[j+1] = item[j];
      }

      item[j+1] = value;
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
    inputText.push(line);
    rl.prompt();

}).on('close',() => {
  console.log(inputText);
  dictionary_sort(inputText);
  console.log("Congratulation! You dictionary has : " + inputText.length + " word(s)" + '\n' +inputText );
})
