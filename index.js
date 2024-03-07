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
