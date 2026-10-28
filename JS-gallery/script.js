function upDate(previewPic) {
  console.log("upDate fired");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

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
