const qboxes = document.querySelectorAll(".qbox");
const answers = document.querySelectorAll(".answer");
const showAns = document.querySelectorAll(".btn");
const sidebar = document.querySelector(".sidebar");
const exit = document.querySelector(".exit");
const right = document.getElementById("right");

exit.addEventListener("click", () => {
  sidebar.classList.add("sidebar");
});

right.addEventListener("click", () => {
  sidebar.classList.remove("sidebar");
  sidebar.classList.add("sidebar-visible");
});

showAns.forEach((ans) => {
  ans.addEventListener("click", () => {
    ans.parentElement.nextElementSibling.classList.toggle("answer");
    ans.firstChild.nextElementSibling.classList.toggle("fa-minus");
    ans.firstChild.nextElementSibling.classList.toggle("fa-plus");
  });
});
