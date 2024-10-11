const category = [
  {
    title: "Fruits & Vegetables",
    img: "./src/images/category-fruits.png",
  },
  {
    title: "Baby & Pregnancy",
    img: "./src/images/category-baby.png",
  },
  {
    title: "Beverages",
    img: "./src/images/category-beverages.png",
  },
  {
    title: "Meats & Seafood",
    img: "./src/images/category-meats.png",
  },
  {
    title: "Biscuits & Snacks",
    img: "./src/images/category-biscuits.png",
  },
  {
    title: "Breads & Bakery",
    img: "./src/images/category-bakery.png",
  },
  {
    title: "Breakfast & Diary",
    img: "./src/images/category-breakfast.png",
  },
  {
    title: "Frozen Foods",
    img: "./src/images/category-frozen.png",
  },
  {
    title: "Grocery & Staples",
    img: "./src/images/category-grocery.png",
  },
];

const categoriesContainer = document.querySelector(".categories-wrapper");

function createCategory(data) {
  data.forEach((item) => {
    categoriesContainer.innerHTML += `
    <div class="category_item container">
        <div class="category_img">
            <a href="/shop/shop.html"><img src="${item.img}" alt="" /></a>
        </div>
            <div class="category_text">${item.title}</div>
    </div>
        `;
  });
}
createCategory(category);
