const nav = document.getElementById("navbar");
const btn = document.getElementById("btn");
const box = document.getElementById("box");
const txt = document.getElementById("here");
const tw = document.querySelectorAll(".tw");
const hex = document.querySelectorAll(".hex");

tw_colors = [
  "red",
  "gray",
  "blue",
  "green",
  "indigo",
  "purple",
  "yellow",
  "pink",
];
tw_value = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
hex_value = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];

btn.addEventListener("click", () => {
  nav.classList.toggle("show-no");
  btn.classList.toggle("clicked");
});

window.addEventListener("DOMContentLoaded", () => {
  txt.textContent = "red-200";
});

tw.forEach((twb) =>
  twb.addEventListener("click", () => {
    box.style.backgroundColor = "";
    const opac = "bg-opacity-50";
    const clr = tw_colors[getRandom(tw_colors.length)];
    const val = tw_value[getRandom(tw_value.length)];
    const final_color = `${clr}-${val}`;
    const tw_setter = `bg-${final_color} ${opac}`;
    txt.textContent = final_color;
    box.className = tw_setter;
  })
);

hex.forEach((hexb) =>
  hexb.addEventListener("click", () => {
    let clr = "#";
    for (let i = 0; i < 6; ++i) {
      clr += hex_value[getRandom(hex_value.length)];
    }
    txt.textContent = clr;
    box.style.backgroundColor = clr + "AA";
  })
);

function getRandom(sz) {
  return Math.floor(Math.random() * sz);
}
