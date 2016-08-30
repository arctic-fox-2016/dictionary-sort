let dictionary_array = [];
let sort_array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S',
'T','U','V','W','X','Y','Z'];

function dictionary_sort(arr){
  var array_value = [];
  for(let idx = 0; idx < arr.length; idx++){
    array_value[idx] = 0;
    for(let idy = 0; idy < arr[idx].length; idy++){
      for(let idz = 0; idz < sort_array.length; idz++){
        if(arr[idx].charAt(idy).toLowerCase() == sort_array[idz].toLowerCase()){
          array_value[idx] += idz;
        }
      }
    }
    //array_value[idx] *= Math.pow(10, arr[idx].length);
    array_value[idx] += arr[idx].length;
    //console.log(array_value[idx] + " - " + test_array[idx]);
  }

  for(let idx = 0; idx < arr.length; idx++){
    for(let idy = idx+1; idy < arr.length; idy++){
      if(array_value[idy] < array_value[idx]){
        var temp_value = array_value[idx];
        array_value[idx] = array_value[idy];
        array_value[idy] = temp_value;

        var temp_text = arr[idx];
        arr[idx] = arr[idy];
        arr[idy] = temp_text;
        idx = 0;
      }
    }
  }

  //console.log("==================");

  for(let idx = 0; idx < arr.length; idx++){
    //console.log(array_value[idx] + " - " + test_array[idx]);
    console.log(arr[idx]);
  }

  rl.close();
}

//let test_array = ["Z", "Doe", "Ipsum", "Lorem"]; BUGGY
//dictionary_sort(test_array); BUGGY

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
