const dropdownLang = document.querySelectorAll(".lang");
const dropdownButtonLang = document.getElementById("dropdownMenuButtonLang");
const dropdownCurrency = document.querySelectorAll(".currency");
const dropdownButtonCurrency = document.getElementById(
  "dropdownMenuButtonCurrency"
);

dropdownLang.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    const selectedValue = this.getAttribute("data-value");
    const selectedText = this.textContent;

    dropdownButtonLang.innerText = selectedText;
  });
});

dropdownCurrency.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    const selectedValue = this.getAttribute("data-value");
    const selectedText = this.textContent;

    dropdownButtonCurrency.innerText = selectedText;
  });
});
