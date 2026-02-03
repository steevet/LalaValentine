const noBtn = document.getElementById("noBtn");
const noText = document.getElementById("noText");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  noText.style.opacity = 1;
});

// // const music = document.getElementById("bgMusic");

// // if (localStorage.getItem("musicPlaying") === "true") {
// //   music.play().catch(() => {});
// // }

// window.addEventListener("DOMContentLoaded", () => {
//   const music = document.getElementById("bgMusic");

//   if (
//     music &&
//     localStorage.getItem("musicPlaying") === "true"
//   ) {
//     music.play().catch(() => {});
//   }
// });

const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

if (yesBtn && music) {
  yesBtn.addEventListener("click", () => {
    music.play()
      .then(() => {
        localStorage.setItem("musicPlaying", "true");
        window.location.href = "yes.html";
      })
      .catch(() => {
        alert("Tap again 💖");
      });
  });
}