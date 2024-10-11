const counterCart = document.querySelector(".cart-counter");
counterCart.innerText = localStorage.getItem("counter") || 0;
let cartProducts = JSON.parse(localStorage.getItem("product"));
const cart = document.querySelector(".cart-products-wrapper");
const mainCartWrapper = document.querySelector(".cart");
let counter = localStorage.getItem("counter");

function renderCart(data) {
  data.forEach((product) => {
    cart.innerHTML += `
        <div class="column_card">
                        <div class="card" style="width: 18rem">
                            <div class="card_top">
                                <img src="${product.productImage}" class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${product.productTitle}</h5>
                                <div class="price">
                                    <span class="new" style="font-weight: 700; font-size: 18px;">${product.productPrice}</span>
                                </div>
                                <div class="card_bottom d-flex mt-3 gap-3 flex-column" style="border: none;">
                                <div class="d-flex align-items-center mt-4 gap-3">
                                    <button id="decrement" class="btn btn-danger" data-action="minus">-</button>
                                        <h3 id="counterValue">1</h3>
                                    <button id="increment" class="btn btn-success" data-action="plus">+</button>
                                    <button class="btn btn-info removeButton"><i class="bi bi-trash3"></i></button>
                                </div>
                                    <h6 style="color: green; font-weight: 700;">In stock</h6>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
  });
}

if (cartProducts.length == 0) {
  mainCartWrapper.innerHTML = `
  <div
      class="cart-wrapper container d-flex justify-content-center align-items-center flex-column gap-4 mt-5 mb-5"
    >
      <img src="./src/images/empty-cart.png" alt="" />
      <h3 class="cart-wrapper-text">Your cart is currently empty.</h3>
      <a href="../shop/shop.html"
        ><button class="btn btn-primary cart-wrapper-btn">
          Return to shop
        </button></a
      >
    </div>
  `;
} else {
  renderCart(cartProducts);
}

// ! Working with checkout section
function renderCheckout() {
  const checkoutMain = document.querySelector(".checkout-main");
  checkoutMain.innerHTML = "";
  let totalPrice = 0;

  cartProducts.forEach((item) => {
    const checkPrice = Number(item.productPrice.substring(1));
    const checkTitle = item.productTitle;
    totalPrice += checkPrice * item.quantity;

    const subtotal = document.querySelector(".subtotal-price");
    subtotal.innerHTML = `<h6>$${totalPrice.toFixed(2)}</h6>`;

    checkoutMain.innerHTML += `
      <div class="d-flex justify-content-between align-items-center pt-2 info">
        <h6 id="name">${checkTitle} ×<span class="amount">${
      item.quantity
    }</span></h6>
        <h6 id="price">$${checkPrice.toFixed(2) * item.quantity}</h6>
      </div>
    `;
  });

  const flatRateShipping = document.querySelector(".flat-rate");
  if (flatRateShipping.checked) {
    totalPrice += Number(flatRateShipping.value);
  }

  const localPickup = document.querySelector(".local");
  if (localPickup.checked) {
    totalPrice;
  }

  const totalPriceEl = document.querySelector(".total-price");
  totalPriceEl.innerHTML = `
  <h6>$${totalPrice.toFixed(2)}</h6>
  `;
}
const flatRateShipping = document.querySelectorAll(".flat-rate");
flatRateShipping.forEach((button) => {
  button.addEventListener("change", renderCheckout);
});

const localPickup = document.querySelectorAll(".local");
localPickup.forEach((button) => {
  button.addEventListener("change", renderCheckout);
});

window.addEventListener("click", function (event) {
  let counterCard;
  const minus = document.querySelector('[data-action="minus"]');
  const plus = document.querySelector('[data-action="plus"]');

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterItems = event.target.closest(".card");
    counterCard = counterItems.querySelector("#counterValue");

    const productTitle = counterItems.querySelector(".card-title").innerText;

    const product = cartProducts.find(
      (item) => item.productTitle === productTitle
    );

    if (event.target.dataset.action === "plus") {
      if (product) {
        product.quantity++;
      }
    }

    if (event.target.dataset.action === "minus") {
      if (parseInt(counterCard.innerText) > 1) {
        if (product) {
          product.quantity--;
        }
      }
    }
    renderCheckout();
  }

  if (event.target.dataset.action === "plus") {
    counterCard.innerText = ++counterCard.innerText;
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(counterCard.innerText) > 1) {
      counterCard.innerText = --counterCard.innerText;
    }
  }
});

renderCheckout();

const removeButtons = document.querySelectorAll(".removeButton");
removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.reload();
    if (counter > 0) localStorage.setItem("counter", --counter);
    if (counter == 0) {
      window.location.reload();
      localStorage.removeItem("counter");
      counterCart.innerText = 0;
    }
    counterCart.textContent = localStorage.getItem("counter");
    button.closest(".card").remove();

    const cardName = button
      .closest(".card")
      .querySelector(".card-title").innerText;
    const checkWrapper = document.querySelector(".checkout-main");
    if (checkWrapper.innerHTML.includes(cardName)) {
    }

    let updatedArray = cartProducts.filter((item) => {
      return (
        item.productTitle.toLowerCase() !=
        button
          .closest(".card")
          .querySelector(".card-title")
          .innerText.toLocaleLowerCase()
      );
    });
    localStorage.setItem("product", JSON.stringify(updatedArray));
  });
});

// * Thanks for buying shu yerda yozilganda hullas :)
const orderbtn = document.querySelector(".modal-btn");
orderbtn.addEventListener("click", () => {
  localStorage.setItem("product", JSON.stringify([]));
  localStorage.setItem("counter", 0);
  window.location.reload();
});
