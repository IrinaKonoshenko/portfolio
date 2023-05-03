const header = document.getElementsByClassName("header")[0];

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 0) {
    header.classList.add("scrolling");
  } else {
    header.classList.remove("scrolling");
  }
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
