const img1 = document.querySelector(".bg-img1");
const img2 = document.querySelector(".bg-img2");
const img3 = document.querySelector(".bg-img3");
const gra = document.querySelector(".gradient-content");
const block1 = document.querySelector("#block1");
const copy = document.querySelector(".visual__copy");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const block = block1.getBoundingClientRect();

  img1.style.marginTop = `${scrollY * 1.2}px`;
  img2.style.marginTop = `${scrollY * 0.8}px`;
  img3.style.marginTop = `${scrollY * -0.12}px`;
  gra.style.transform = `translateY(${scrollY * -0.3}px)`;
  copy.style.marginTop = `${scrollY * 0.3}px`;

  if (block.top < 0) {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
  } else {
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";
  }
});
