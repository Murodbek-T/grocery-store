const date = new Date();
let currentYear = date.getFullYear();

function setYear(year) {
  const copyrightText = document.querySelector(".copyright-year");
  copyrightText.innerHTML = `<p>Copyright ${year} © Grogin WooCommerce WordPress Theme. All right reserved. Powered by <span class="sponsor">KLBTheme.</span></p>`;
}

setYear(currentYear)
