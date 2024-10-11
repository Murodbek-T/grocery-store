const columnCards = document.querySelectorAll(".column");
const singleCard = document.querySelector(".big-card");
const viewAll = document.getElementById("bestViewAll");

viewAll.addEventListener("click", (e) => {
  const wrapper = document.querySelector(".best-sellers_bottom");
  wrapper.classList.toggle("clicked");
  const singleCardEl = document.querySelector(".single")
  if(singleCardEl){
    singleCard.innerHTML = ""
  }else{
    singleCard.innerHTML = createSingleCard(products, randomNum);
  }
});

function getRandomIndex(array) {
  const min = 1;
  const max = array.length - 1;
  return Math.floor(Math.random() * (max - min) + min);
}

let randomNum = getRandomIndex(products);

function createColumnCards(data) {
  data.forEach((item, index) => {
    const columnIndex = index % columnCards.length;

    const block = columnCards[columnIndex];
    block.innerHTML += `
      <div class="row_card">
        <div class="card p-3" style="max-width: 540px">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-md-4">
              <div class="card_top">
                <img
                  src="${item.image}"
                  class="img-fluid rounded-start"
                  alt="${item.title}"
                />
                <div class="discount">${item.discount}%</div>
                <i class="bi bi-heart heart"></i>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body ms-3">
                <h5 class="card-title">${item.title}</h5>
                <img src="./src/icons/star-${item.stars}.svg" alt="stars" />
                <div class="price">
                  <span class="new">$${item.newPrice}</span>
                  <span class="old">$${item.oldPrice}</span>
                </div>
                <button class="btn btn-primary row_card-button mt-3 addToCart">
                  Add To Cart <i class="bi bi-plus bi-plus-lg"></i>
                </button>
              </div>
            </div>
            <div class="timer d-flex mt-4 gap-3 align-items-center">
              <p class="day">00</p>
              <p class="hour">00</p>
              <p class="minute">00</p>
              <span style="font-size: 24px; margin-bottom: 20px">:</span>
              <p class="second">00</p>
              <h6 class="info">Remains until the end of the offer</h6>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function createSingleCard(data, index) {
  return (singleCard.innerHTML += `
        <div class="column_card single">
            <div class="card" style="width: 433px; height: 965px;">
              <div class="card_top">
                <img
                  src="${data[index].image}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="discount">${data[index].discount}%</div>
                <i class="bi bi-heart heart"></i>
              </div>
              <div class="card-body d-flex flex-column gap-5">
                <h5 class="card-title">
                  ${data[index].title}
                </h5>
                <p class="card-text" style="line-height: 30px;">
                  ${data[index].description}
                </p>
                <div class="price">
                  <span class="new" style="font-size: 28px;">$${data[index].newPrice}</span> <span class="old">$${data[index].oldPrice}</span>
                </div>
                <div class="card_bottom">
                  <p>This product is about to run out</p>
                  <div class="bar"></div>
                  <p>available only: <strong>${randomNum}</strong></p>
                  <button class="btn btn-primary big-card-button addToCart"><i class="bi bi-bag"></i> Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        `);
}

createSingleCard(products, randomNum);
createColumnCards(products);
