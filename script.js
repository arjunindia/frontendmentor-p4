let pA = [8, 12, 16, 24, 36];
let pB = ["10K", "50K", "100K", "500K", "1M"];
let slider = document.getElementById("myRange");
let cont = document.querySelector(".slidecontainer");
let pagev = document.querySelector(".pageviews");
let cost = document.querySelector(".cost");
cont.addEventListener("click", function (e) {
  cost.innerText = `$${pA[slider.value - 1]}`;
  pagev.innerText = `${pB[slider.value - 1]} Pageviews`;
});
