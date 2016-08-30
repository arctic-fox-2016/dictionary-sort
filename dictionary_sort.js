var arr = [];
var words = []
var hasil = [];
function dictionary_sort(arr) {

  return arr;
}

  // Your code here to sort the array
// ...your code here to initialize the program and take user input
var words = new Array();
var tampung = prompt("Test a word");
words.push(tampung);

while (tampung!==""){
  tampung = prompt("Test a word again : ")
  words.push(tampung);
}

console.log(words.sort());
hasil = words.sort();


console.log("Congratulations! Your dictionary has "+(hasil.length)+" words");
for(var i = 1 ; i < hasil.length ; i++)
{
  console.log(hasil[i]);
}





// ...your code here to initialize the program and take user input
