console.log(
  "Hello, nice to meet you! if you haven't already checkout my github, or linkedin!"
);
console.log("https://github.com/etg624");
console.log("https://www.linkedin.com/in/evan-guirino");
function anchorLinkHandler(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

// const bg = document.querySelector(".bg");
// const windowWidth = window.innerWidth / 5;
// const windowHeight = window.innerHeight / 5;

// bg.addEventListener("mousemove", e => {
//   const mouseX = e.clientX / windowWidth;
//   const mouseY = e.clientY / windowHeight;

//   bg.style.backgroundPosition = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
// });
