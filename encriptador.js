document.getElementById("texto").addEventListener("input", function () {
  document.getElementById("output").innerText = this.value;
});

function encriptar() {
  let textoEncrip = document.getElementById("texto").value;

  let tokens = textoEncrip.split(" ").map(encrypt);
  //document.getElementById( "result").innerText = `Texto encriptado: ${encryptedText}`;
}

function encrypt(word) {
  console.log(word);

  
}

function desencriptar() {
  let desencrip = document.getElementById("texto").value;
}
