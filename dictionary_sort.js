let temps = []
let z = 0;
// while (angka[z]!=""){
//   angka[z] = prompt("Masukan input kata-kata anda","default")
//   if (angka[z] != ""){
//     z++
//   } else {
//     angka.pop()
//   }
//
// }

function dictionary_sort(angka) {
  // Your code here to sort the array
  let urutanBaru = []
  let jumlahAngka = angka.length;
  for (var i=0; i<=(jumlahAngka-1); i++){
    urutanBaru[i] = angka[0]

    for (var j=0; j<=(angka.length-1); j++){

      if(angka[j].localeCompare(urutanBaru[i])==(-1)) {
        urutanBaru[i] = angka[j]
      }
    }
    for (x=0;x<=(angka.length-1);x++){
      if (angka[x]==urutanBaru[i]){
        angka.splice(x,1)
      }
    }
  }
  return urutanBaru
}

// ...your code here to initialize the program and take user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt("Type another word: ")
console.log("Type a word: ")
rl.on('line', (answer) => {
  if(answer ==""){
    console.log(dictionary_sort(temps))
    rl.close();

  }else{
    temps.push(answer)
    rl.prompt();

  }




});
