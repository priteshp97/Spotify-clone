const songs = document.querySelectorAll(".popular-inner-song");
const number = document.querySelectorAll(".popular-inner-number");

for (let i = 1; i <= songs.length; i++) {
  songs[i - 1].addEventListener("mouseenter", function () {
    number[i - 1].innerHTML = `<i class="fas fa-play"></i>`;
  });
  songs[i - 1].addEventListener("mouseleave", function () {
    number[i - 1].innerHTML = `<p class="popular-inner-number">${i}</p>`;
  });
}
