let vid = document.querySelector('.cooking-vid');
let effect = document.querySelector('.play-pause-effect');

function playPauseVideo() {
  if (vid.paused) {
    // Video is paused → play it, show Pause icon
    vid.play();
    effect.style.backgroundImage = "url('./pause.svg')"; // You need to have pause.svg
  } else {
    // Video is playing → pause it, show Play icon
    vid.pause();
    effect.style.backgroundImage = "url('./forward.svg')";
  }
}

// Optional: Keep icon updated on pause/play from other sources (keyboard, etc.)
vid.addEventListener('pause', () => {
  effect.style.backgroundImage = "url('./forward.svg')";
});
vid.addEventListener('play', () => {
  effect.style.backgroundImage = "url('./pause.svg')";
});


  
