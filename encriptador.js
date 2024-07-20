function CapturarInfo() {
  let textoEncrip = document.getElementById("texto").value;

  encryptedText = textoEncrip
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  //let tokens = textoEncrip.split(" ").map(encrypt);
  document.getElementById(
    "result"
  ).innerText = `Texto encriptado: ${encryptedText}`;
}

/*function encrypt(word) {
 
}*/

function desencriptar() {
  let desencrip = document.getElementById("texto").value;

  let decryptedText = desencrip
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById(
    "result"
  ).innerText = `Texto desencriptado: ${decryptedText}`;
}
