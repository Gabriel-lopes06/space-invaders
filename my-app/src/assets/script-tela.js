function createStars() {

  const starContainer = document.getElementById("stars");
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {

    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 3;
    star.style.width = size + "px";
    star.style.height = size + "px";

    starContainer.appendChild(star);
  }
}

createStars();