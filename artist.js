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
// audio track
var aud = document.getElementById("ASong").children[0];
  var isPlaying = false;
  aud.pause();

  function playPause() {
    if (isPlaying) {
      aud.pause();
    } else {
      aud.play();
    }
    isPlaying = !isPlaying;
  }
function loginCredentialCheck(){
  usernameCheck()
}

  function usernameCheck(){
    var email="bpm@gmail.com"
    var user="bpm"
    let userMailNode=document.getElementById("user/email").value
    if(userMailNode==email||userMailNode==user){
      passwordCheck()
    }
    else{
      alert("go")
    }
  }

  function passwordCheck(){
    var password="spotify"
    let passwordFieldNode=document.getElementById("passwordField").value
    if(passwordFieldNode==password){
      window.location.href="testinganimation.html"
    }
    else{
      alert("Wrong password! try again")
    }
  }