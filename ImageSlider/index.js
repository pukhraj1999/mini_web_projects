let move = 100;
let x = 0;
let len = 3;
let slider = document.querySelector(".slider");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
next.onclick = () => {
  if (x == len - 1) return;
  x++;
  slider.style.transform = `translateX(${-x * move}%)`;
};
prev.onclick = () => {
  if (x == 0) return;
  x--;
  slider.style.transform = `translateX(${-x * move}%)`;
};
