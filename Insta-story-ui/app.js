const profiles = [
  {
    name: "Luca Moretti",
    title: "Somewhere I did'nt plan to be",
    dp: "https://plus.unsplash.com/premium_photo-1683133857379-9068081bc7bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    story:
      "https://plus.unsplash.com/premium_photo-1683133860849-630834be313a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Elina Kovacs",
    title: "Lines, light, silence",
    dp: "https://images.unsplash.com/photo-1766693931661-f08765fcfc00?q=80&w=733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1670167941146-928bd619b9e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  },
  {
    name: "Mateo Alvarez",
    title: "Morning air hits different",
    dp: "https://images.unsplash.com/photo-1622132883284-1691576fee2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1616236800965-0afe257d60cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Sofia Lindstrom",
    title: "Keeping it simple today",
    dp: "https://images.unsplash.com/photo-1616339777117-5ca1e2e9811b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1768344564592-d5182059115a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    name: "Noah Fischer",
    title: "Nothing staged here",
    dp: "https://plus.unsplash.com/premium_photo-1760018690240-04d5ae6a52ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1760018689998-c425c6c788e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
  },
  {
    name: "Theo Bennett",
    title: "Just passing the time",
    dp: "https://images.unsplash.com/photo-1678892538101-73ff0e531145?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1671032330233-9bb51b6f9dca?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const storyBoard = document.getElementById("story-board");
const fullScreen = document.getElementById("full-screen");
const storyName = document.getElementById("story-name");
const storyTitle = document.getElementById("story-title");
const feed = document.getElementById("feed");

function renderStories() {
  storyBoard.innerHTML = profiles
    .map(
      (p, i) => `
    <div class="story">
      <img loading="lazy" data-index="${i}" src="${p.dp}" alt="${p.name}">
    </div>
  `,
    )
    .join("");
}

function openStory(index) {
  document.querySelectorAll(".story")[index].classList.add("viewed");

  fullScreen.style.display = "block";
  fullScreen.style.backgroundImage = `url(${profiles[index].story})`;
  storyName.textContent = profiles[index].name;
  storyTitle.textContent = profiles[index].title;

  setTimeout(() => {
    fullScreen.style.display = "none";
  }, 3000);
}

storyBoard.addEventListener("click", (e) => {
  if (!e.target.dataset.index) return;
  openStory(e.target.dataset.index);
});

function renderFeed() {
  feed.innerHTML = profiles
    .map(
      (p) => `
    <div class="feed-item">
      <img loading="lazy" src="${p.story}" alt="${p.title}">
      <div class="feed-actions">        <i class="ri-poker-hearts-line"></i>
        <i class="ri-share-forward-line"></i>
        <i class="ri-message-3-line"></i></div>
      <div class="feed-caption">
        <strong>${p.name}</strong> ${p.title}
      </div>
    </div>
  `,
    )
    .join("");
}

renderStories();
renderFeed();
