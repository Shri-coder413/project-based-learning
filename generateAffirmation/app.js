const affirmations = [
  {
    text: "I am strong and grow with every challenge",
    bg: "https://i.pinimg.com/736x/07/c7/f4/07c7f467fd18692cac34be9b4687d398.jpg",
  },
  {
    text: "I am focused and create my own future",
    bg: "https://i.pinimg.com/736x/f3/5e/aa/f35eaa7fc7e695448eefed14b8abbe16.jpg",
  },
  {
    text: "I am consistent, and my confidence grows every day",
    bg: "https://i.pinimg.com/736x/25/3f/7e/253f7e8ab1ded253e0b7f24e2a83b9be.jpg",
  },
  {
    text: "I am progressing every day, not perfect but moving forward",
    bg: "https://i.pinimg.com/736x/a6/e8/c3/a6e8c32546ae4a5c6417164fdac0af2a.jpg",
  },
  {
    text: "I am calm, capable, and confident in myself",
    bg: "https://i.pinimg.com/1200x/a7/49/58/a749587d9ff8cefe6b24ddb574a251b7.jpg",
  },
];

const affirmationEl = document.getElementById("affirmation");
const generateBtn = document.getElementById("generateBtn");

let bgIndex = 0; // controls image order

function showAffirmation() {
  const randomText = affirmations[Math.floor(Math.random() * affirmations.length)].text;

  const currentBg = affirmations[bgIndex].bg;

  affirmationEl.style.opacity = 0;

  const img = new Image();
  img.src = currentBg;

  img.onload = () => {
    document.body.style.backgroundImage = `url(${currentBg})`;
    affirmationEl.textContent = randomText;
    affirmationEl.style.opacity = 1;
  };

  bgIndex = (bgIndex + 1) % affirmations.length;
}

generateBtn.addEventListener("click", showAffirmation);