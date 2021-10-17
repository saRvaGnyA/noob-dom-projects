const image = document.getElementById("image");
const title = document.getElementById("title");
const desc = document.getElementById("description");

const left = document.getElementById("btn-left");
const right = document.getElementById("btn-right");

const data = [
  {
    im: "./img/card1.jpg",
    ti: "The first card",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    im: "./img/card2.jpg",
    ti: "The second card",
    des: "Exercitationem sapiente, reiciendis quidem possimus earum voluptate? Dolore vel praesentium maiores,",
  },
  {
    im: "./img/card3.jpg",
    ti: "The third card",
    des: "earum facilis corrupti? Ex nobis ipsam neque quasi labore beatae ea qui numquam!",
  },
];

let display = 0;

function showItem() {
  image.src = data[display].im;
  title.textContent = data[display].ti;
  desc.textContent = data[display].des;
}

window.addEventListener("DOMContentLoaded", showItem);

left.addEventListener("click", function () {
  display--;
  if (display < 0) {
    display = data.length - 1;
  }
  showItem();
});

right.addEventListener("click", function () {
  display = (display + 1) % data.length;
  showItem();
});
