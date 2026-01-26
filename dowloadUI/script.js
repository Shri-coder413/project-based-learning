// const h1 = document.querySelector("h1");
// const downloadBtn = document.querySelector("button");
// const innerDiv = document.querySelector("#inner");

// let grow = 0;

// downloadBtn.addEventListener("click", function () {
//   downloadBtn.style.pointerEvents = 'none';
//   console.log("button was clicked");

//   let sec = 50 + Math.floor(Math.random()*50);

//   console.log(sec);

//   let int = setInterval(() => {
//     grow++;
//     h1.innerHTML = `${grow}%`;
//     innerDiv.style.width = `${grow}%`;
//   }, sec);

//   setTimeout(() => {
//     downloadBtn.style.opacity = 0.5;
//     downloadBtn.innerHTML = "downloaded";
//     console.log(`download completed in ${sec/10} seconds`);
//     clearInterval(int);
//   }, sec*100);
// });

const state = {
  progress: 0,
  isDownloading: false,
  duration: 4000, // total download time in ms
};

const progressText = document.querySelector("h1");
const downloadBtn = document.querySelector("button");
const progressBar = document.querySelector("#inner");

function updateUI(progress) {
  progressText.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;
}
function startDownload() {
  if (state.isDownloading) return;

  state.isDownloading = true;
  downloadBtn.disabled = true;
  downloadBtn.textContent = "downloading...";

  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const percentage = Math.min(
      Math.round((elapsed / state.duration) * 100),
      100
    );

    state.progress = percentage;
    updateUI(percentage);

    if (percentage < 100) {
      requestAnimationFrame(animate);
    } else {
      finishDownload();
    }
  }

  requestAnimationFrame(animate);
}
function finishDownload() {
  state.isDownloading = false;
  downloadBtn.textContent = "downloaded";
  downloadBtn.style.opacity = "0.6";
}
downloadBtn.addEventListener("click", startDownload);
