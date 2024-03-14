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

//Ninth section: Lord of the Rings Riddle

let buttonOne = document.getElementById("button-one");
let buttonTwo = document.getElementById("button-two");
let buttonThree = document.getElementById("button-three");
let buttonFour = document.getElementById("button-four");
let buttonFive = document.getElementById("button-five");
let buttonSix = document.getElementById("button-six");
let buttonSeven = document.getElementById("button-seven");
let buttonEight = document.getElementById("button-eight");
let buttonNine = document.getElementById("button-nine");
let buttonTen = document.getElementById("button-ten");
let buttonEleven = document.getElementById("button-eleven");
let buttonTwelve = document.getElementById("button-twelve");
let paragraphOne = document.getElementById("first-riddle-paragraph");
let sectionChange = document.getElementById("lord-of-the-rings-section");
let instructionHide = document.getElementById("lord-of-the-rings-instructions");
let headingColor = document.querySelector(".lord-of-the-rings-heading");
let paragraphTwo = document.getElementById("second-riddle-paragraph");
let formOne = document.getElementById("riddle-three-form");
let formTwo = document.getElementById("riddle-five-form");
let formThree = document.getElementById("riddle-seven-form");

function showFirstRiddle() {
  buttonOne.style.display = "none";
  sectionChange.style.backgroundColor = "#5e614d";
  headingColor.style.color = "#000";
  instructionHide.innerHTML =
    '<img src="./images/Galadriel.jpg" alt="Galadriel" class="lord-of-the-rings-photo"/>';
  paragraphOne.innerHTML =
    "Welcome MELON! As the story begins, you can think about a world so far away and so mysterious you wish you could leave your life behind to live there. But in MIDDLE-EARTH lies a dark shadow and you remember this old... we will call it <em>poem</em>.";
  paragraphTwo.innerHTML =
    "It began with the forging of the Great Rings. Three were given to the Elves, immortal, wisest and fairest of all beings. Seven to the Dwarf-Lords, great miners and craftsmen of the mountain halls. And nine, nine rings were gifted to the race of Men, who above all else desire power. For within these rings was bound the strength and the will to govern each race. But they were all of them deceived, for another ring was made. Deep in the land of Mordor, in the Fires of Mount Doom, the Dark Lord Sauron forged a master ring, and into this ring he poured his cruelty, his malice and his will to dominate all life. One ring to rule them all. One ring to find them, one ring to bring them all and in the darkness bind them in the land of Mordor where the Shadows lie. <br /> <b>The woman, the elf on the picture introduces us in the first movie to the history. What is her name?</b>";
  buttonTwo.style.display = "inline";
  buttonThree.style.display = "inline";
}
function showSecondRiddle() {
  instructionHide.innerHTML =
    '<img src="./images/Herr-der-Ringe-picture-alliance-Mary-Evans-Picture-Library-18613065-.jpg" alt="The Hobbits" class="lord-of-the-rings-photo"/>';
  paragraphOne.innerHTML =
    "<b>Frodo</b> carries the One Ring. Gandalf the wizard trusts him. But Gandalf cannot travel with Frodo and the <em>Nazgul</em> are on their way (The Nine, the black riders, they are the dreaded ring-servants of the dark Lord Sauron). There is no time to hesitate, he must bring the ring to Rivendell. And Frodo is lucky to have his gardener and friend by his side: Samwise Gamgee.";
  paragraphTwo.innerHTML =
    "But luckily Frodo has two more friends, who join him on his way. The moment, one of the <em>Nazgul</em> shows up, is for all of them terrifying. Merry knows a quick way to their next stage. <br /> <b>Choose the right path:</b>";
  buttonTwo.style.display = "none";
  buttonThree.style.display = "none";
  buttonFour.style.display = "inline";
  buttonFive.style.display = "inline";
}
function showThirdRiddle() {
  instructionHide.innerHTML =
    '<img src="./images/strider1.jpg" alt="Strider" class="lord-of-the-rings-photo"/><img src="./images/aragorn-500x375.jpg" alt="Aragorn" class="lord-of-the-rings-photo"/>';
  paragraphOne.innerHTML =
    "Great! You are now in Bree. But Gandalf is not here to meet the Hobbits... Something is wrong... Good, that there is a helpful stranger who saves Frodo. Something really stupid happened: Pippin, the fourth hobbit, is telling people about Frodo and Frodo slips on beer or something else and falls down, while he tries to tell Pippin to stop talking with strangers about him. The Ring is flying and lands on Frodos finger: We see that the Black Rider is not alone anymore and they get back on track and are on their way, now that Frodo had the ring on his finger. In the night the try to kill the hobbits, but the stranger (Strider or Aragorn) saves them.";
  paragraphTwo.innerHTML =
    "After the little incident on Weathertop Hill, where Frodo nearly died, they were rescued by Arwen, a High-Elf from Rivendell, daughter of Elrond. Elrond, the Lord of Rivendell, saves Frodo. <br /> <b>The council begins and it is full of mistrust and dispute. Some of it produces the ring on the table. Everyone seems to be affected by the ring, but one person:</b>";
  buttonFour.style.display = "none";
  buttonFive.style.display = "none";
  formOne.style.display = "inline";
}
function showFourthRiddle(event) {
  event.preventDefault();
  let riddleInput = document.getElementById("riddle-three-input");
  let riddleAnswer = riddleInput.value;
  if (riddleInput.value === "Frodo" || riddleInput.value === "frodo") {
    formOne.style.display = "none";
    paragraphOne.innerHTML =
      "Very good! Now put together the fellowship of the Ring:";
    paragraphTwo.innerHTML = "<b>Choose the right constellation.</b>";
    instructionHide.innerHTML =
      '<img src="./images/Die-gefaehrten.jpg" alt="The fellowship" class="lord-of-the-rings-photo"/>';
    buttonSix.style.display = "inline";
    buttonSeven.style.display = "inline";
  } else {
    alert(`${riddleAnswer} is wrong, guess again.`);
  }
}
function showFifthRiddle() {
  instructionHide.innerHTML =
    '<img src="./images/Balrog.jpeg" alt="The Balrog" class="lord-of-the-rings-photo"/>';
  paragraphOne.innerHTML =
    "The fellowship is now good to go. A long journey is ahead of them. <br /> “Home is behind, the world ahead, and there are many paths to tread through shadows to the edge of night, until the stars are all alight. Then world behind and home ahead, we will wander back and home to bed. Mist and twilight, cloud and shade, away shall fade! Away shall fade!”― J.R.R. Tolkien,";
  paragraphTwo.innerHTML =
    "Over the hill and under the hill, over the Caradhras and through the mines of Moria. The fellowship felt the influence of the corrupted wizard Saruman: The storm and snow made it impossible to go over the Caradhras, they must go through the mines. And there are orcs and another terrifying and ancient creature: The Balrog. <br /> <b>Only Gandalf can stop the Balrog. Do you remember how? He bravely confronted him on the bridge of Kazad-dûm, so the rest could flee. What is his famous quote, while he stops the Balrog?</b>";
  buttonSix.style.display = "none";
  buttonSeven.style.display = "none";
  formTwo.style.display = "inline";
  buttonEight.style.display = "none";
}
function showSixthRiddle(event) {
  event.preventDefault();
  let riddleInput = document.getElementById("riddle-five-input");
  if (
    riddleInput.value === "You shall not pass!" ||
    riddleInput.value === "you shall not pass" ||
    riddleInput.value === "YOU SHALL NOT PASS!" ||
    riddleInput.value === "You shall not pass"
  ) {
    alert("You nailed it! You can pass!");
    instructionHide.innerHTML =
      '<img src="./images/Gimli.jpg" alt="Gimli" class="lord-of-the-rings-photo"/> <img src="./images/legolas-i142869.jpg" alt="Legolas" class="lord-of-the-rings-photo"/>';
    paragraphOne.innerHTML =
      "Without Gandalf they managed to get to Lothlórien to meet Galadriel. They get help, gifts, food and boats to travel by water. They can only imagine, what is coming to them: Saruman crossed Orcs with Goblin-men (Half human, half orc) to breed the uruk-hai. They are stronger, taller able to move in the daytime without ill effects.";
    paragraphTwo.innerHTML =
      "The big fight at the end of the first movie is also the breaking point of the fellowship. Frodo wants to protect everyone and wants to go alone to Mordor, but Sam is a good friend and follows him. But what happened to the other ones? Merry and Pippin were kidnapped after the leader of the Uruks killed the second man of the fellowship, Boromir, so cruel. And then are three left: Aragorn, Gimli the dwarf and legolas the elf. <br /><b>What are they doing?</b>";
    formTwo.style.display = "none";
    buttonNine.style.display = "inline";
    buttonTen.style.display = "inline";
  } else {
    alert(
      "Now that is sad... Or maybe you just need to check your grammar? When you really do not know: I embedded a YouTube Video for you to watch."
    );
    paragraphOne.innerHTML =
      '<!DOCTYPE html> <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mJZZNHekEQw?si=GLlbB2ISTIUN7Rs2&amp;start=74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    paragraphTwo.innerHTML = "";
    formTwo.style.display = "none";
    buttonEight.style.display = "inline";
  }
}
function showSeventhRiddle() {
  sectionChange.style.backgroundColor = "#8c4949";
  headingColor.style.color = "#502730";
  paragraphOne.style.color = "#532b35";
  paragraphTwo.style.color = "#532b35";
  buttonNine.style.display = "none";
  buttonTen.style.display = "none";
  instructionHide.innerHTML =
    '<img src="./images/Eomer.jpg" alt="Gimli" class="lord-of-the-rings-photo"/>';
  paragraphOne.innerHTML =
    'Aragorn, Gimli and Legolas are on their way to rescue Merry and Pippin. And Frodo and Sam are on their way to Mount Doom. Let us cover our three running guys. Gimli can summon that for us: <br /> "Three days and nights pursuit… no food, no rest, and no sign of our quarry but what bare rock can tell."';
  paragraphTwo.innerHTML =
    "As they nearly get to the hobbits, they meet Éomer, the Third Marshal of the Mark in Rohan. He tells them, that he and his men killed the Uruk-hai and left no survivors behind. <br /> <b>So our guys assume, that Pippin and Merry are dead. Fortunately they find some signs, that they got away in the forest. So they follow the tracks into FANGORN FOREST. Answer the three questions: <br /> What is special about the forest? <br /> What person do they meet in there?</b> <br /> Where are they going to next and what are they doing there?";
  formThree.style.display = "inline";
}
function showEighthRiddle(event) {
  event.preventDefault();
  let firstQuestion = document.getElementById("riddle-seven-select-one");
  let secondQuestion = document.getElementById("riddle-seven-input");
  let thirdQuestion = document.getElementById("riddle-seven-select-two");
  let capitalizedSecondQuestion =
    secondQuestion.value.charAt(0).toUpperCase() +
    secondQuestion.value.slice(1);
  if (
    firstQuestion.value === "ents" &&
    capitalizedSecondQuestion === "Gandalf" &&
    thirdQuestion.value === "rohan"
  ) {
    alert("Yes! Good! More will come soon. Thank you for playing!");
  } else {
    alert(
      "No, unfortunatly that is not true... Until the rest of the quiz is here, you can use the time to learn more about Lord of the Rings. Thank you for playing!"
    );
  }
}

buttonOne.addEventListener("click", showFirstRiddle);
buttonTwo.addEventListener("click", function () {
  alert("Try again!");
});
buttonThree.addEventListener("click", showSecondRiddle);
buttonFour.addEventListener("click", showThirdRiddle);
buttonFive.addEventListener("click", function () {
  alert(
    "Apparently the bridge is about 20 miles further north. That is a long way to run and the Black Rider has a horse. You die immediatly and Sauron gets the One Ring back: Darkness falls over the land and all hope dies."
  );
  location.reload();
});
formOne.addEventListener("submit", showFourthRiddle);
buttonSix.addEventListener("click", function () {
  alert("You should read the plot or watch the trilogy...");
});
buttonSeven.addEventListener("click", showFifthRiddle);
formTwo.addEventListener("submit", showSixthRiddle);
buttonEight.addEventListener("click", showFifthRiddle);
buttonNine.addEventListener("click", function () {
  alert(
    "Merry and Pippin died shortly after they came to Saruman, because they did not have the One Ring. And with the three noticeable guys, the <em>not attracting attention</em> was over. They were spotted immediately by the Nazgul and died a terrible death. Sauron gets the One Ring back: Darkness falls over the land and all hope dies."
  );
});
buttonTen.addEventListener("click", showSeventhRiddle);
formThree.addEventListener("submit", showEighthRiddle);
