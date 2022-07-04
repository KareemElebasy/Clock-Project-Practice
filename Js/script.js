setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minHand = document.querySelector("[data-min-hand]");
const secHand = document.querySelector("[data-sec-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(hourHand, hoursRatio);
  setRotation(minHand, minutesRatio);
  setRotation(secHand, secondsRatio);
}

const setRotation = (element, rotateRatio) => {
  element.style.setProperty("--rotation", rotateRatio * 360);
};
setClock()
