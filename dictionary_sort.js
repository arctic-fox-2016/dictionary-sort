function dictionary_sort(arr) {
    // Your code here to sort the array
    arr.sort(function compareSecondColumn(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    });

    console.log("Congratulations! Your dictionary has " + arr.length + " words:");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function createDictionary(num) {
    // Initialize program to take user input
    var dictionaryArray = [];
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // First prompt
    rl.setPrompt("Type a word:\n");
    rl.prompt();

    rl.on('line', (line) => {

        // Get dictionary word, put into array
        dictionaryArray[dictionaryArray.length] = line.trim();

        // Check if first word is blank
        if(dictionaryArray[0] == "") {
            dictionaryArray.splice(0, 1);
            rl.setPrompt("Your first word cannot be blank, please type a word:\n");
            rl.prompt();
        } else {

            // Check if other words are blank, then exit
            if(dictionaryArray[dictionaryArray.length - 1] == "") {

                // Delete last data
                dictionaryArray.splice(dictionaryArray.length-1, 1);

                // Sort data
                dictionaryArray = dictionary_sort(dictionaryArray);

                process.exit(0);
            } else {

                // Check if array is longer than 4
                if(dictionaryArray.length < num) {
                    rl.setPrompt("Type another word (or press enter to finish):\n");
                    rl.prompt();
                } else {

                    // Sort data
                    dictionaryArray = dictionary_sort(dictionaryArray);

                    process.exit(0);
                }
            }
        }
    }).on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    });
}

createDictionary(10);
