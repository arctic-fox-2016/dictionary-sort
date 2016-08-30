"use strict"
function dictionary_sort() {
  // Your code here to sort the array


  //
  var dictionary = [];
  var sorted_dictionary = [];
  var penampung = prompt("ketik finish untuk selesai");
  dictionary.push(penampung);
  while(penampung!=="finish"){
    penampung = prompt("ketik finish untuk selesai");
    if (penampung === "finish") {
    } else{
      dictionary.push(penampung);
    }
  }
  for (var i = 0; i < dictionary.length; i++) {
    for (var j = i; j < dictionary.length; j++) {
      if(dictionary[j] < dictionary[i]){
        var first_word = dictionary[i];
        dictionary[i]= dictionary[j];
        dictionary[j] = first_word;
      }
    }


  }
  console.log("congratulation you have "+ dictionary.length+ " new words in your dictionary :\n"+dictionary.join("\n"));
  alert("congratulation you have "+ dictionary.length+ " new words in your dictionary :\n"+dictionary.join("\n"));
}

//

// ...your code here to initialize the program and take user input
// var dictionary = [];
// var selesai = false;
// while(!selesai){
//   var penampung = prompt("ketik finish untuk selesai");
//   if(penampung === "finish") {
//     selesai = true
//   } else{
//     dictionary.push(penampung);
//   }
// }
// console.log(dictionary);

dictionary_sort();
