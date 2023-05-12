const target = document.getElementById("target");
// console.log(target);
let wordIndex = 0;
let letterIndex = 0;
let array = ["Devellopeur", "graphiste", "webDesign"];
// une fonction est un sous programme qui prend en parametre des données et renvois un resultat
// une methode est un objet deja ecrit au préalable
// console.log(array)
const createLetter = () => {
  const letter = document.createElement("span");
  // console.log(letter);
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

//  la fonction loop est une fonction recurcive donc elle tourne sur elle Meme.

const loop = () => {
  setTimeout(() => {
    if(wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;

      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 50);
};
loop();


// createLetter();
// setInterval(()=>{
//     letterIndex++;
//     createLetter();
// },200);
