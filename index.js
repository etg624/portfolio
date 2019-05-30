console.log(
  "%c Hello, nice to meet you! If you haven't already, checkout my github, or linkedin!",
  'background: #222; color: #bada55'
);
console.log('https://github.com/etg624');
console.log('https://www.linkedin.com/in/evan-guirino');

const typeWriterSections = document.querySelectorAll('.add-typewriter');
const intersections = new IntersectionObserver(entries => {
  const entry = entries[0];

  const interRatio = Math.ceil(entry.intersectionRatio);
  if (interRatio > 0) {
    entry.target.style.opacity = 1;
    entry.target.hidden = false;
    entry.target.classList.add('typewriter');
    entry.target.classList.remove('add-typewriter');
  } else {
    entry.target.style.opacity = 0;
  }
});
typeWriterSections.forEach(section => {
  intersections.observe(section);
});

const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useScrollableHeader() {
  let prevScrollPosition = window.pageYOffset;

  window.onscroll = () => {
    let currentPosition = window.pageYOffset;
    const header = document.querySelector('.main-header');

    if (prevScrollPosition > currentPosition) {
      header.style.top = '0';
    } else {
      header.style.top = '-100px';
    }
    prevScrollPosition = currentPosition;
  };
}

const header = document.querySelector('.main-header');

if (width > 701) {
  useScrollableHeader();
} else {
  header.style.position = 'fixed';
  header.style.height = '50px';
}
