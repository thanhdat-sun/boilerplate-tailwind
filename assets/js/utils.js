// ------------------------------ File configuration from the beginning ----------------------------
// When the page is fully loaded
window.addEventListener('load', () => {
  document.body.style.visibility = 'visible';
});

// Function to load HTML content into a specified selector
function load(selector, path) {
  const cached = localStorage.getItem(path);

  if (cached) {
    document.querySelector(selector).innerHTML = cached;
  }

  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      if (html !== cached) {
        document.querySelector(selector).innerHTML = html;
        localStorage.setItem(path, html);
      }
    });
}
