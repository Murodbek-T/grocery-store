const products = [
  {
    discount: 25,
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    oldPrice: 8.99,
    newPrice: 9.99,
    image: "./src/images/rising.png",
    stars: 4,
    description:
      "A delicious frozen pizza with a crispy crust and a flavorful tomato sauce, topped with pepperoni, sausage, mushrooms, and onions.",
  },
  {
    discount: 21,
    title: "Cantaloupe Melon Fresh Organic Cut",
    oldPrice: 1.25,
    newPrice: 2.98,
    image: "./src/images/melon.png",
    stars: 3,
    description:
      "Sweet and juicy organic cantaloupe melon, pre-cut for your convenience.",
  },
  {
    discount: 47,
    title: "100 Percent Apple Juice-64 fl oz Bottle",
    oldPrice: 0.5,
    newPrice: 1.99,
    image: "./src/images/apple-juice.png",
    stars: 2,
    description:
      "A refreshing and healthy 100% pure apple juice, perfect for the whole family.",
  },
  {
    discount: 45,
    title: "Simply Orange Pulp Free Juice-52 fl oz",
    oldPrice: 2.45,
    newPrice: 4.13,
    image: "./src/images/orange-juice.png",
    stars: 2,
    description:
      "A delicious and refreshing orange juice with no pulp, made from real oranges.",
  },
  {
    discount: 11,
    title: "California Pizza Kitchen Margherita, Crispy Thin Crust...",
    oldPrice: 11.77,
    newPrice: 14.77,
    image: "./src/images/california-pizza.png",
    stars: 4,
    description:
      "A classic Margherita pizza with a crispy thin crust, fresh mozzarella cheese, and San Marzano tomato sauce.",
  },
  {
    discount: 18,
    title: "Angel Soft Toilet Paper, 9 Mega Rolls",
    oldPrice: 14.12,
    newPrice: 17.12,
    image: "./src/images/paper.png",
    stars: 3,
    description: "Soft and absorbent toilet paper, perfect for your bathroom.",
  },
  {
    discount: 15,
    title: "Simple Kitchen FD Sliced Strawberries - 1.08lb",
    oldPrice: 21.9,
    newPrice: 24.99,
    image: "./src/images/simple.png",
    stars: 3,
    description:
      "Frozen sliced strawberries, perfect for smoothies, yogurt, or baking.",
  },
  {
    discount: 20,
    title: "Red Baron Frozen Hand-Tossed Ultimate Pepperoni Pizza...",
    oldPrice: 14.99,
    newPrice: 18.99,
    image: "./src/images/redbaron.png",
    stars: 3,
    description:
      "A classic pepperoni pizza with a hand-tossed crust, perfect for a quick and easy meal.",
  },
  {
    discount: 8,
    title: "Oscar Mayer Ham & Swiss Melt Scrambler - 3oz",
    oldPrice: 11.9,
    newPrice: 12.99,
    image: "./src/images/oscar.png",
    stars: 3,
    description:
      "A delicious breakfast sandwich with ham, Swiss cheese, and eggs, perfect for a busy morning.",
  },
  {
    discount: 16,
    title: "Large Garden Spinach & Herb Wrap Tortillas - 15oz, 8ct",
    oldPrice: 27.9,
    newPrice: 32.99,
    image: "./src/images/spinach.png",
    stars: 3,
    description:
      "Healthy and delicious spinach and herb wrap tortillas, perfect for making your own sandwiches.",
  },
  {
    discount: 14,
    title: "Great Value Rising Crust Pizza, Cheese - 27.4 oz",
    oldPrice: 12.89,
    newPrice: 14.99,
    image: "./src/images/crust-pizza.png",
    stars: 2,
    description:
      "A classic cheese pizza with a rising crust, perfect for a budget-friendly meal.",
  },
  {
    discount: 31,
    title: "Absolut Grapefruit Paloma Sparkling Vodka Cocktail - 4pc, 355ml",
    oldPrice: 6.99,
    newPrice: 9.99,
    image: "./src/images/absolut.png",
    stars: 3,
    description:
      "A delicious and refreshing sparkling vodka cocktail with grapefruit flavor, perfect for any occasion.",
  },
  {
    discount: 40,
    title: "Vitaminwater zero sugar squeezed electrolyte...",
    oldPrice: 4.99,
    newPrice: 8.99,
    image: "./src/images/vitaminwater.png",
    stars: 4,
    description:
      "A healthy and hydrating electrolyte drink with zero sugar, perfect for staying refreshed.",
  },
];

const productsContainer = document.querySelector(".products_bottom");
function renderProduct(data) {
  data.forEach((product) => {
    productsContainer.innerHTML += `
    <div class="column_card">
            <div class="card" style="width: 18rem">
              <div class="card_top">
                <img
                  src="${product.image}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="discount">${product.discount}%</div>
                <i class="bi bi-heart heart"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  ${product.title}
                </h5>
                <img src="./src/icons/star-${product.stars}.svg" alt="" />
                <div class="price">
                  <span class="new">$${product.newPrice}</span> <span class="old">$${product.oldPrice}</span>
                </div>
                <div
                  class="card_bottom d-flex align-items-center mt-3 gap-3"
                  style="border: none;"
                >
                  <button class="btn btn-cart addToCart">
                    <img src="./src/icons/cart.svg" alt="" />
                  </button>
                  <h6>In stock</h6>
                </div>
              </div>
            </div>
          </div>
    `;
  });
}

renderProduct(products);

const viewAllBtn = document.getElementById("viewProducts");
viewAllBtn.addEventListener("click", () => {
  productsContainer.classList.toggle("all");
});
