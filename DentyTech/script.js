const images = document.querySelectorAll("#img");

images.forEach((image) => {
  image.addEventListener("click", function () {
    this.style.pointerEvents = "none"

    if (this.classList.contains("left")) {
      this.classList.add("exit-left");
    } else {
      this.classList.add("exit-right");
    }
  });
});
