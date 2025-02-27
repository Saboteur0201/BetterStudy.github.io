// Stats Data
const statsData = {
  totalMessages: 0,
  messagesLast24h: 0,
  totalPosts: 0,
  studySessions: 0
};

// Update Stats on Load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("total-messages").textContent = statsData.totalMessages;
  document.getElementById("messages-24h").textContent = statsData.messagesLast24h;
  document.getElementById("total-posts").textContent = statsData.totalPosts;
  document.getElementById("study-sessions").textContent = statsData.studySessions;
});

// Light - Dark Mode
function toggleMode() {
  let body = document.body;
  let lamp = document.querySelector(".lamp");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    lamp.src = "/images/lamp-dark.png"; // Switch to dark mode lamp icon
  } else {
    body.classList.add("light-mode");
    lamp.src = "/images/lamp-light.png"; // Switch to light mode lamp icon
  }
}

// Scroll Button
function scrollToStats() {
  document.getElementById("stats").scrollIntoView({ behavior: "smooth" });
}

function scrollToLanding(){
  document.getElementById("landing").scrollIntoView({behavior: "smooth"});
}


function toggleScroll(){
  

}

// Smooth transition
document.addEventListener("DOMContentLoaded", function () {
  // Select all animated elements
  const animatedElements = document.querySelectorAll(".title, .motto, .buttons, .scroll-arrow, .stats-container, .footer");

  // Animation upon load
  setTimeout(() => {
    animatedElements.forEach((el) => {
      el.style.opacity = "0";
    });
  }, 100);
});