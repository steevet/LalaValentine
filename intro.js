// const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", async () => {
  try {
    // await music.play();
    // localStorage.setItem("musicPlaying", "true");
    window.location.href = "question.html";
  } catch (err) {
    alert("Tap again");
  }
});

