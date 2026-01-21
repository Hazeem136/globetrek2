// LOAD MORE BUTTON

const loadMoreBtn = document.getElementById("loadMoreBtn");
const hiddenCountries = document.querySelectorAll(".hidden-country");

let currentIndex = 0;
const itemsToShow = 4;

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
      if (hiddenCountries[i]) {
        hiddenCountries[i].style.display = "block";
      }
    }

    currentIndex += itemsToShow;

    if (currentIndex >= hiddenCountries.length) {
      loadMoreBtn.style.display = "none";
    }
  });
}

// DESTINATION SEARCH MAP
const destinationPages = {
  tokyo: "tokyo.html",
  shanghai: "shanghai.html",
  bangkok: "bangkok.html",
  china: "china.html",
  vietnam: "vietnam.html",
  indonesia: "indonesia.html",
  afganistan: "afganistan.html",
  armenia: "armenia.html",
  malaysia: "malaysia.html",
  singapore: "singapore.html",
  georgia: "georgia.html",
  azerbaijan: "azerbaijan.html",
  thailand: "thailand.html",
  london: "london.html",
  berlin: "berlin.html",
  paris: "paris.html",
  italy: "italy.html",
  portugal: "portugal.html",
  spain: "spain.html",
  turkey: "turkey.html",
  qatar: "qatar.html"

};

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function redirectToDestination() {
  const query = searchInput.value.toLowerCase().trim();

  if (destinationPages[query]) {
    window.location.href = destinationPages[query];
  } else {
    alert("Destination not found");
  }
}

// CLICK SEARCH BUTTON
searchBtn.addEventListener("click", redirectToDestination);

// PRESS ENTER KEY
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    redirectToDestination();
  }
});

// Fade-in cards on scroll
document.addEventListener("DOMContentLoaded", () => {   // wait until page loads
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');  // make it fade in
        observer.unobserve(entry.target);       // fade only once
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});


function updateClock() {
  const now = new Date();

  // Options for date and time
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kuala_Lumpur' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kuala_Lumpur' };

  const dateString = now.toLocaleDateString('en-US', dateOptions);
  const timeString = now.toLocaleTimeString('en-US', timeOptions);

  document.getElementById('logoClock').textContent = `${dateString} | ${timeString}`;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();

const openBtn = document.getElementById("openJoin");
const modal = document.getElementById("joinModal");
const closeBtn = document.getElementById("closeJoin");

openBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

function goNext() {
  const email = document.getElementById("email").value;
  const agree = document.getElementById("agree").checked;

  if (!email) return alert("Please enter your email");
  if (!agree) return alert("Please agree to the terms");

  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");
}

