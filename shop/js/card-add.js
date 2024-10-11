

const cartCounter = document.querySelector(".cart-counter");
const addButtons = document.querySelectorAll(".addToCart");
let counter = localStorage.getItem("counter") || 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCounter.textContent = localStorage.getItem("counter");

    const cardImage = button
      .closest(".card")
      .querySelector("img")
      .getAttribute("src");

    const cardTitle = button
      .closest(".card")
      .querySelector(".card-title").innerText;

    const cardPrice = button
      .closest(".card")
      .querySelector(".price")
      .querySelector(".new").innerText;

    addToArray(cardTitle, cardImage, cardPrice);
  });
});
cartCounter.textContent = localStorage.getItem("counter") || 0;

function addToArray(title, image, price) {
  let cart = JSON.parse(localStorage.getItem("product")) || [];
  let info = {
    productTitle: title,
    productImage: `${image}`,
    productPrice: price,
    quantity: 1,
  };

  cart.push(info);
  counter++;
  localStorage.setItem("counter", counter);
  localStorage.setItem("product", JSON.stringify(cart));
  cartCounter.textContent = localStorage.getItem("counter") || 0;
}
