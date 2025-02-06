function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });

  //
  document.getElementById('move-random').addEventListener('click', function() {
    let randomLinks = ['no1.html', 'no2.html', 'no3.html'];
    let randomLink = randomLinks[Math.floor(Math.random() * randomLinks.length)];
    window.location.href = randomLink;
});