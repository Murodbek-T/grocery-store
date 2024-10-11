const articles = [
  {
    title: "How grocers are approaching delivery as the market evolves",
    description:
      "Blimålväkt treskade i nibel den mobilmilsbruk deren jyn nöning osk heterostik i rel ultran. Fälass",
    image: "./src/images/news-img1.png",
    author: "sinan",
    uploadDate: "3 Nov 2023",
    categorized: "Uncategorized",
  },
  {
    title: "The Friday Checkout: Food insecurity keeps retailers off balance",
    description:
      "Blimålväkt treskade i nibel den mobilmilsbruk deren jyn nöning osk heterostik i rel ultran. Fälass",
    image: "./src/images/news-img2.png",
    author: "sinan",
    uploadDate: "3 Nov 2023",
    categorized: "Uncategorized",
  },
  {
    title: "Consumer want grocer to use AI to help them save money Dunnhumby",
    description:
      "Blimålväkt treskade i nibel den mobilmilsbruk deren jyn nöning osk heterostik i rel ultran. Fälass",
    image: "./src/images/news-img3.png",
    author: "sinan",
    uploadDate: "3 Nov 2023",
    categorized: "Uncategorized",
  },
  {
    title:
      "Order up! How grocers are replicating the restaurant experience in retail",
    description:
      "Blimålväkt treskade i nibel den mobilmilsbruk deren jyn nöning osk heterostik i rel ultran. Fälass",
    image: "./src/images/news-img4.png",
    author: "sinan",
    uploadDate: "3 Nov 2023",
    categorized: "categorized",
  },
];

const newsContainer = document.querySelector(".news_bottom");

function renderNews(data) {
  data.forEach((item) => {
    newsContainer.innerHTML += `
        <div class="card" style="width: 22rem; border: none">
            <div class="card-top">
              <img
                src="${item.image}"
                class="card-img-top"
                alt="..."
              />
              <div class="news-label">${item.categorized}</div>
            </div>
            <div class="pt-3">
              <p class="card-title news-title">${item.title}</p>
              <p class="card-text news-description">
                ${item.description}
              </p>
              <div class="card-bottom d-flex gap-3">
                <p class="author"><span class="italic">by</span> ${item.author}</p>
                <p class="upload-date">${item.uploadDate}</p>
              </div>
            </div>
          </div>
        `;
  });
}

renderNews(articles);
