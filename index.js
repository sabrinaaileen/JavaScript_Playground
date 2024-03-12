//Date
function showDate() {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let currentDay = date.getDate();
  if (currentDay === 1) {
    currentDay = `${currentDay}st`;
  } else if (currentDay === 2) {
    currentDay = `${currentDay}nd`;
  } else if (currentDay === 3) {
    currentDay = `${currentDay}rd`;
  } else {
    currentDay = `${currentDay}th`;
  }
  let currentYear = date.getFullYear();
  let actualDay = document.querySelector("#day-display");
  actualDay.innerHTML = `Today, it's ${day} the ${currentDay} of ${month} ${currentYear}.`;
  let actualTime = document.querySelector("#time-display");
  actualTime.innerHTML = `The current time is ${hours}:${minutes}:${seconds}.`;
}
setInterval(showDate, 1000);

let today = new Date();
let newDate = today.getDate();
console.log(newDate);

//Hero button
let backgroundChange = document.getElementById("hero-button");
backgroundChange.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.value === "utopia") {
    document.getElementById("hero-h1").style.color = "#064f06";
    document.getElementById("hero-h2").style.color = "#064f06";
    document.getElementById("hero-button").style.backgroundColor = "#064f06";
    document.getElementById("hero").style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(./images/Turtle_Group_2.jpeg)";
    let valueChange = document.getElementById("hero-button");
    valueChange.value = "distopia";
  } else {
    location.reload();
  }
});

//First section: Diary
let diaryForm = document.getElementById("diary-form");

diaryForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let diaryText = document.getElementById("diary-text");

  if (diaryText.value) {
    let newDiaryEntry = document.createElement("li");

    newDiaryEntry.id = "diary-entry";
    newDiaryEntry.innerHTML = diaryText.value;
    document.getElementById("diary-list").appendChild(newDiaryEntry);
  }
});

//Second section: Font and Color Change

let coincidence = document.getElementById("font-color-fun-paragraph");

coincidence.addEventListener("click", function () {
  let newColor = "";
  let newFont = "";
  let x = Math.floor(Math.random() * 9);
  switch (x) {
    case 0:
      newColor = "yellowgreen";
      newFont = "Times New Roman";
      break;
    case 1:
      newColor = "green";
      newFont = "Lucida Grande";
      break;
    case 2:
      newColor = "rose";
      newFont = "Lucida Sans Unicode";
      break;
    case 3:
      newColor = "blue";
      newFont = "Trebuchet MS";
      break;
    case 4:
      newColor = "citrus";
      newFont = "Arial Narrow";
      break;
    case 5:
      newColor = "purple";
      newFont = "Franklin Gothic Medium";
      break;
    case 6:
      newColor = "red";
      newFont = "Gill Sans";
      break;
    case 7:
      newColor = "darkblue";
      newFont = "Helvetica";
      break;
    case 8:
      newColor = "brown";
      newFont = "Arial Narrow Bold";
      break;
  }
  coincidence.style.color = newColor;
  coincidence.style.fontFamily = newFont;
});

//Third section: Fortune Teller

let fortuneQuotes = [
  "An exciting opportunity lies ahead of you.",
  "Get your mind set…confidence will lead you on.",
  "Sell your ideas-they have exceptional merit.",
  "Your ability to juggle many tasks will take you far.",
  "Be true to your work, your word, and your friend.",
  "Goodness is the only investment that never fails.",
  "Respect yourself and others will respect you.",
  "Once you make a decision the universe conspires to make it happen.",
  "Happy News is on its way.",
  "Love is like wildflowers…it is often found in the most unlikely places.",
  "Love is not something you find, love is something that finds you.",
];
let fortuneTelling = document.getElementById("fortune-teller-button");

function getFortuneTelling() {
  let randomFortune = Math.floor(Math.random() * fortuneQuotes.length);
  return fortuneQuotes[randomFortune];
}

function showFortuneTelling() {
  let fortuneParagraph = document.getElementById("fortune-teller-paragraph");
  fortuneParagraph.innerHTML = getFortuneTelling();
  fortuneTelling.innerHTML = "Come back tomorrow";
  fortuneTelling.removeEventListener("click", showFortuneTelling);
}

fortuneTelling.addEventListener("click", showFortuneTelling);

//Fourth section: Lucky number

let luckyButton = document.getElementById("lucky-number-button");

function getLuckyNumber() {
  let randomNumber = Math.floor(Math.random() * 9);
  return randomNumber;
}

function showLuckyNumber() {
  let luckyNumber = document.getElementById("lucky-number");
  luckyNumber.innerHTML = getLuckyNumber();
  luckyButton.innerHTML = "Congratulations!";
  luckyButton.removeEventListener("click", showLuckyNumber);
}

luckyButton.addEventListener("click", showLuckyNumber);

//Fifth section: Crazy Color

let crazyColorButton = document.getElementById("crazy-color-button");
let crazyColorParagraph = document.getElementById("crazy-color-paragraph");

let funnySentences = [
  "Very good!",
  "Hope you enjoy!",
  "This looks nice!",
  "That is my favorite color!",
  "I think, that is enough!",
  "Could this BE more fun?",
  "You are doing great!",
  "You are a pro in this game!",
];
function getRandomSentence() {
  let randomSentence = Math.floor(Math.random() * funnySentences.length);
  return funnySentences[randomSentence];
}

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 256);
  return randomColor;
}

function changeColorButton(event) {
  let newColor =
    "rgb(" +
    getRandomColor() +
    "," +
    getRandomColor() +
    "," +
    getRandomColor() +
    ")";
  event.target.style.backgroundColor = newColor;
  event.target.style.borderColor = newColor;
  event.target.style.color = "white";
  crazyColorButton.innerHTML = getRandomSentence();
}
function changeColorParagraph() {
  let newColor =
    "rgb(" +
    getRandomColor() +
    "," +
    getRandomColor() +
    "," +
    getRandomColor() +
    ")";
  crazyColorParagraph.style.color = newColor;
}

crazyColorButton.addEventListener("click", changeColorButton);
crazyColorParagraph.addEventListener("wheel", changeColorParagraph);

//Sixth section: Picture hide & seek

let showButton = document.getElementById("show-image-button");
let hideButton = document.getElementById("hide-image-button");
let picture = document.getElementById("hide-and-seek-image");
let hiddenParagraph = document.getElementById("hidden-show-image-paragraph");

function showImage() {
  picture.style.display = "block";
  hideButton.style.display = "inline";
  showButton.innerHTML = "Hello, World!";
  hiddenParagraph.innerHTML = "See? I was right 🥰.";
}
function hideImage() {
  picture.style.display = "none";
  hideButton.style.display = "none";
  showButton.innerHTML = "Show me the picture again!";
  hiddenParagraph.innerHTML = "";
}

showButton.addEventListener("click", showImage);
hideButton.addEventListener("click", hideImage);

//Seventh section: Bounce that ball

let bouncingBall = document.getElementById("float-circle");

function up() {
  bouncingBall.style.bottom = "270px";
}
function down() {
  bouncingBall.style.bottom = "50px";
}
document.addEventListener("keydown", up);
document.addEventListener("keyup", down);

//Eighth section: Mouse events

let mouseClick = document.querySelector("#mouse-action-paragraph");

const mouseDown = (event) => {
  event.target.style.backgroundColor = "#7c3c68";
};
const mouseUp = (event) => {
  event.target.style.backgroundColor = "";
};
mouseClick.addEventListener("mousedown", mouseDown);
mouseClick.addEventListener("mouseup", mouseUp);
