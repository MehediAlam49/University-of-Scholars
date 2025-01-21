// Main header sticky----------------------
let main_header = document.querySelector(".main_header");
window.addEventListener("scroll", function () {
  if (window.scrollY > main_header.offsetHeight) {
    main_header.classList.add("sticky");
  } else {
    main_header.classList.remove("sticky");
  }
});
