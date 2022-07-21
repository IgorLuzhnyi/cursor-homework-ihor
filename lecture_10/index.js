const albumCover = document.querySelector(".album-cover");
const buttonContainer = document.querySelector(".button-container");
const letters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const stopSong = function () {
  albumCover.style.backgroundImage = "none";
  if (song) {
    song.pause();
    song.currentTime = 0;
  }
};
let song; // current playing audio

const playMusic = function (index) {
  stopSong();
  albumCover.style.backgroundImage = `url('img/img-${index}.jpg')`;

  song = document.getElementById(`audio-${index}`);
  song.play();
};

// Click event
buttonContainer.addEventListener("click", function (e) {
  const curIndex = e.target.id.split("-")[1];
  playMusic(curIndex);
});

// Button event
document.addEventListener("keydown", function (e) {
  stopSong();

  if (e.keyCode > 64 && e.keyCode < 91) {
    letters.find((curLetter) => {
      if (curLetter === e.code.charAt(3).toLowerCase()) playMusic(curLetter);
    });
  }
});
