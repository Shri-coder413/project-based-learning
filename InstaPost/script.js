const like = document.querySelector("#like");
const img = document.querySelector("img");

img.addEventListener("dblclick", function () {
  like.style.opacity = 1;
  like.style.transform = " translate(-50%,-50%) scale(1) rotate(15deg)";
  
  
  setTimeout(() => {
    like.style.opacity = 1;
    like.style.transform = " translate(-50%, 340%) scale(1) rotate(15deg)";
    
  }, 1000)
});
