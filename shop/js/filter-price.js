const price = document.querySelector(".filter-price");
const minPriceEl = document.querySelector(".min-input");
const maxPriceEl = document.querySelector(".max-input");
price.innerHTML = `Price: $<span class="minValue">0</span> - $<span class="maxValue">30</span>`;
const minPriceValue = document.querySelector(".minValue");
const maxPriceValue = document.querySelector(".maxValue");
const range = document.querySelector("input[type='range']");
range.addEventListener("input", () => {
  minPriceEl.value = range.value;
  minPriceValue.textContent = range.value || 0;
});

minPriceInput.addEventListener("input", () => {
  minPriceValue.textContent = minPriceEl.value || 0;
});

maxPriceInput.addEventListener("input", () => {
  maxPriceValue.textContent = maxPriceEl.value || 30;
});
