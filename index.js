console.log(
  "%c Hello, nice to meet you! If you haven't already, checkout my github, or linkedin!",
  'background: #222; color: #bada55'
);
console.log('https://github.com/etg624');
console.log('https://www.linkedin.com/in/evan-guirino');
// function anchorLinkHandler(e) {
//   const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//   e.preventDefault();
//   const targetID = this.getAttribute('href');
//   const targetAnchor = document.querySelector(targetID);

//   if (!targetAnchor) return;
//   const originalTop = distanceToTop(targetAnchor);

//   window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });

//   const checkIfDone = setInterval(function() {
//     const atBottom =
//       window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//     if (distanceToTop(targetAnchor) === 0 || atBottom) {
//       targetAnchor.tabIndex = '-1';
//       targetAnchor.focus();
//       window.history.pushState('', '', targetID);

//       clearInterval(checkIfDone);
//     }
//   }, 100);
// }

// const linksToAnchors = document.querySelectorAll('a[href^="#"]');

// linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

const typeWriterSections = document.querySelectorAll('.add-typewriter');
const intersections = new IntersectionObserver(entries => {
  const entry = entries[0];

  const interRatio = Math.ceil(entry.intersectionRatio);

  if (entry.intersectionRatio > 0) {
    entry.target.classList.remove('add-typewriter');
    entry.target.classList.add('typewriter');
  } else {
    return;
  }
});
typeWriterSections.forEach(section => {
  intersections.observe(section);
});
