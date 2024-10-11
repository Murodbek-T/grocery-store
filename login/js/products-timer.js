const countDownDateProducts = new Date("Dec 20, 2024 15:37:25").getTime();

var y = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDateProducts - now;

  let pDay = Math.floor(distance / (1000 * 60 * 60 * 24));
  let pHour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let pMinute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let pSecond = Math.floor((distance % (1000 * 60)) / 1000);

  const productDay = document.querySelectorAll(".day");
  productDay.forEach((day) => {
    day.innerHTML = pDay;
  });
  const productHours = document.querySelectorAll(".hour");
  productHours.forEach((hour) => {
    hour.innerHTML = pHour;
  });
  const productMinute = document.querySelectorAll(".minute");
  productMinute.forEach((minute) => {
    minute.innerHTML = pMinute;
  });
  const productSecond = document.querySelectorAll(".second");
  productSecond.forEach((second) => {
    second.innerHTML = pSecond;
  });

  if (distance < 0) {
    clearInterval(y);
    document.querySelector(".day").innerHTML = "00";
    document.querySelector(".hour").innerHTML = "00";
    document.querySelector(".minute").innerHTML = "00";
    document.querySelector(".second").innerHTML = "00";
  }
}, 1000);

const wishlistButton = document.querySelectorAll(".heart");
wishlistButton.forEach((button) => {
  button.addEventListener("click", () => {
    button.className = "bi bi-heart-fill heart";
  });
});
