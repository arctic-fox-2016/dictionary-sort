var word= new Array();
var input = prompt("Type a word");

word.push(input)
while (input !== ""){
  input = prompt("Type another word (or press enter to finish)");
  word.push(input)
 }
word = dictionary_sort(word);
cetakHasil(word);


function cetakHasil(word) {
  var pesan = "Congratulations! Your dictionary has " + (word.length-1) + " words:"
  console.log(pesan);
  for (var i = 1; i <= word.length-1 ; i++) {
    console.log(word[i]);
  }
}
function dictionary_sort(arr) {
  // Your code here to sort the array
  return arr.sort(insensitive);
}


function insensitive(s1, s2) {
  var s1lower = s1.toLowerCase();
  var s2lower = s2.toLowerCase();
  return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);
}
