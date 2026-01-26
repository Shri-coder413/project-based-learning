const mainEle = document.querySelector("main");
const createEleBtn = document.querySelector("button");

let Affirmation = [
  "I am Intelligent",
  "I can Speak English fluently",
  "I love JS",
  "I like to read books",
  "I can Swim",
  "I am sharp minded",
  "I love My Mom & Dad",
  "I love my little bro",
];

createEleBtn.addEventListener("click", function () {
  const h1 = document.createElement("h1");

  let a = Math.floor(Math.random() * Affirmation.length);
  let x = Math.floor(Math.random() * 80);
  let y = Math.floor(Math.random() * 80);
  let rot = Math.floor(Math.random() * 360);
  let size = Math.floor(Math.random() * 3);

  h1.textContent = Affirmation[a];
  h1.style.position = "absolute";
  h1.style.top = y + "%";
  h1.style.left = x + "%";
  h1.style.fontSize = size + "rem";
  h1.style.rotate = rot + "deg";

  mainEle.appendChild(h1);


  allText = document.querySelectorAll("h1");

    if(allText.length > 80){
      allText.forEach(element => {
        mainEle.removeChild(element)
      });
    }

});




