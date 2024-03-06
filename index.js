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
