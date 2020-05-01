const fgFile = document.getElementById("fgFile");
const bgFile = document.getElementById("bgFile");
const fgCanvas = document.getElementById("fgCanvas");
const bgCanvas = document.getElementById("bgCanvas");
let fgImage;
let bgImage;

function loadFgImage() {
  fgImage = new SimpleImage(fgFile);
  fgImage.drawTo(fgCanvas);
}

function loadBgImage() {
  bgImage = new SimpleImage(bgFile);
  bgImage.drawTo(bgCanvas);
}

function clearCanvas() {
  const fgCtx = fgCanvas.getContext("2d")
  const bgCtx = bgCanvas.getContext("2d")

  fgCtx.clearRect(0, 0, fgImage.getWidth(), fgImage.getHeight())
  bgCtx.clearRect(0, 0, bgImage.getWidth(), bgImage.getHeight())
  
}

function greenScreen() {
  const greenThreshold = 225
  if (fgImage == undefined || bgImage == undefined) {
    console.log(fgImage);
    console.log(bgImage);
    
    console.error("Image(s) missing!");

    return;
  }

  clearCanvas();

  const output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

  for (var pixel of fgImage.values()) {
    const x = pixel.getX();
    const y = pixel.getY();

    if (pixel.getGreen() > greenThreshold) {
      var bgPixel = bgImage.getPixel(x, y);
      output.setPixel(x, y, bgPixel);
    } else {
      output.setPixel(x, y, pixel);
    }
  }

  output.drawTo(fgCanvas)

}
