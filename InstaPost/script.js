const img = document.querySelector(".card img");
const like = document.querySelector("#like");

img.addEventListener("dblclick", () => {

  like.style.opacity = 1;
  like.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  setTimeout(() => {
    like.style.opacity = 0;
    like.style.transform = "translate(-50%, -50%) scale(0) rotate(30deg)";
  }, 600);

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("i");

    heart.className = "ri-poker-hearts-fill fh";
    document.querySelector(".card").appendChild(heart);

    const moveX = (Math.random() - 0.5) * 200;
    const moveY = - (Math.random() * 200 + 50);
    const rotate = (Math.random() - 0.5) * 180;

    setTimeout(() => {
      heart.style.transform = `translate(${moveX}px, ${moveY}px) scale(0.5) rotate(${rotate}deg)`;
      heart.style.opacity = 0;
    }, 50);

    setTimeout(() => heart.remove(), 700);
  }
});
