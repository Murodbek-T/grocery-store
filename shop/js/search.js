let searchBar = document.querySelector(".search");
searchBar.addEventListener("input", () => {
  let filtered = Array.from(shop);
  filtered = shop.filter((product) => {
    return product.title.toLowerCase().includes(searchBar.value.toLowerCase());
  });

  renderShopProducts(filtered);
  renderPagination(filtered.length);
});
