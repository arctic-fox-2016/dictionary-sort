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
  var len = arr.length;
  for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1].toLowerCase().localeCompare(arr[j].toLowerCase())>0){
          var temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
       }
    }
  }
  return arr;

}
