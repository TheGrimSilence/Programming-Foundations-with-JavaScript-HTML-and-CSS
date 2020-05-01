const imgCanvas = document.getElementById("can");
const fileField = document.getElementById("fileField");
let image


function fileUpload() {
  image = new SimpleImage(fileField);
  image.drawTo(imgCanvas);
}

function greyscale() {
  if (image == undefined) {
    console.error("Upload an image dumbass! ⚠")
  } else {

    for (const pixel of image.values()) {
      let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }

    const imgCanvas = document.getElementById("can");
    image.drawTo(imgCanvas);
  }

}
