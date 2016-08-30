let dictionary_array = [];

function dictionary_sort(arr){
  for(let idx = 0; idx < arr.length; idx++){
    for(let idy = idx+1; idy < arr.length; idy++){
      if(arr[idy] < arr[idx]){
        var temp_value = arr[idx];
        arr[idx] = arr[idy];
        arr[idy] = temp_value;
        idx = 0;
      }
    }
  }

  for(let idx = 0; idx < arr.length; idx++){
    console.log(arr[idx]);
  }

  rl.close();
}

// ...your code here to initialize the program and take user input
console.log("$ node dictionary_sort.js");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Type a word:\n'
});

rl.prompt();
rl.on('line', (line) => {
  dictionary_array[dictionary_array.length] = line.trim();
  if(dictionary_array.length < 4){
    rl.setPrompt("Type another word (or press enter to finish):\n");
    rl.prompt();
  } else {
    console.log("\n\nCongratulations! Your dictionary has 4 words:");
    dictionary_sort(dictionary_array);
  }
}).on('close', () => {
  console.log('\n\n\n ============== \nHave a great day!');
  process.exit(0);
});
