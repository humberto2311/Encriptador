// Función para encriptar texto usando if
function encryptText() {
    // Captura el valor del campo de texto
    let textInput = document.getElementById('textInput').value;
    let encryptedText = '';

    for (let i = 0; i < textInput.length; i++) {
        let char = textInput[i];
        if (char === 'e') {
            encryptedText += 'enter';
        } else if (char === 'i') {
            encryptedText += 'imes';
        } else if (char === 'a') {
            encryptedText += 'ai';
        } else if (char === 'o') {
            encryptedText += 'ober';
        } else if (char === 'u') {
            encryptedText += 'ufat';
        } else {
            encryptedText += char;
        }
    }

    // Muestra el texto encriptado en la página
    document.getElementById('result').innerText = `Texto encriptado: ${encryptedText}`;
}

// Función para desencriptar texto usando if
function decryptText() {
    // Captura el valor del campo de texto
    let textInput = document.getElementById('textInput').value;
    let decryptedText = '';
    let i = 0;

    while (i < textInput.length) {
        if (textInput.substring(i, i + 5) === 'enter') {
            decryptedText += 'e';
            i += 5;
        } else if (textInput.substring(i, i + 4) === 'imes') {
            decryptedText += 'i';
            i += 4;
        } else if (textInput.substring(i, i + 2) === 'ai') {
            decryptedText += 'a';
            i += 2;
        } else if (textInput.substring(i, i + 4) === 'ober') {
            decryptedText += 'o';
            i += 4;
        } else if (textInput.substring(i, i + 4) === 'ufat') {
            decryptedText += 'u';
            i += 4;
        } else {
            decryptedText += textInput[i];
            i++;
        }
    }

    // Muestra el texto desencriptado en la página
    document.getElementById('result').innerText = `Texto desencriptado: ${decryptedText}`;
}

