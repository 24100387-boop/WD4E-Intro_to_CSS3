function upDate(previewPic) {
  console.log("upDate fired:", previewPic.alt);

  const image = document.getElementById("image");

  image.textContent = previewPic.alt;
  image.style.backgroundImage = `url("${previewPic.src}")`;
}

function unDo() {
  console.log("unDo fired");

  const image = document.getElementById("image");

  image.style.backgroundImage = "url('')";
  image.textContent = "Hover over an image below to display here.";
}

function addTabFocus() {
  console.log("Page loaded: addTabFocus fired");

  const previews = document.querySelectorAll(".preview");

  for (let i = 0; i < previews.length; i++) {
    previews[i].setAttribute("tabindex", "0");
    console.log("Added tabindex to photo", i + 1);
  }
}

window.addEventListener("load", addTabFocus);
