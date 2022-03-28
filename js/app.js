let arrayOfWelcomingChangeable = [
  "World !",
  "Every Body !",
  "Eng School !",
  "Users !",
];

let welcoming_changeable = document.querySelector(".welcoming-changeable");
let square_pracit = document.querySelectorAll(".square-pracit");

setInterval(() => {
  let random = Math.floor(Math.random() * 3);
  welcoming_changeable.innerHTML = arrayOfWelcomingChangeable[random];
}, 1000);
