
let qrImage = document.getElementById("qrImage");
let qrInp = document.getElementById("qrInp");

qrImage.style.display = "none"

function generateQR() {
  qrImage.style.display = "block"
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrInp.value;
}
