const container = document.querySelector(".container");
const card = document.querySelector(".card");
const btns = document.getElementsByClassName("btn");
const food = document.getElementById("food");
const title = document.querySelector(".title");
const desc = document.querySelector(".description");
const price = document.querySelector(".price");
const stock = document.getElementById("number");

let btnActive;
let cost = 0;
const decreaseValue = () => {
  let value = parseInt(stock.value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  stock.value = value;

  if (btnActive) {
    cost = parseFloat(btnActive.value, 10) * parseInt(stock.value, 10);
    price.innerHTML = `Total price: $${cost.toFixed(2)}`;
  }
};

const increaseValue = () => {
  let value = parseInt(stock.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  stock.value = value;

  if (btnActive) {
    cost = parseFloat(btnActive.value, 10) * parseInt(stock.value, 10);
    price.innerHTML = `Total price: $${cost.toFixed(2)}`;
  }
};
for (let btn of btns) {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    price.classList.remove("hide");
    cost = parseFloat(btn.value, 10) * parseInt(stock.value, 10);
    price.innerHTML = `Total price: $${cost.toFixed(2)}`;

    btnActive = btn;
    for (let btnt of btns) {
      if (btnt !== btn) btnt.classList.remove("active");
    }
  });
}

//Mouse enter - Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = `none`;

  title.style.transform = "translateZ(40px)";
  desc.style.transform = "translateZ(25px)";

  food.style.transform = "rotate(360deg) translateZ(50px)";
});

//Mouse move in container - Animate follow mouse
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

//Mouse leave - Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = `0.5s all ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0)";
  desc.style.transform = "translateZ(0)";

  food.style.transform = "rotate(0) translateZ(0)";
});
