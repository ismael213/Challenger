// Función para encriptar texto usando un cifrado César simple
function encrypt(text) {
    let result = "";
    const shift = 3; // Desplazamiento fijo
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            // Mayúsculas
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Minúsculas
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

// Función para desencriptar texto
function decrypt(text) {
    let result = "";
    const shift = 3; // Desplazamiento fijo
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            // Mayúsculas
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            }
            // Minúsculas
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

// Función para manejar el evento del botón Encriptar
function encryptText() {
    let text = document.getElementById("inputText").value;
    let encryptedText = encrypt(text);
    document.getElementById("outputText").textContent = encryptedText;
}

// Función para manejar el evento del botón Desencriptar
function decryptText() {
    let text = document.getElementById("inputText").value;
    let decryptedText = decrypt(text);
    document.getElementById("outputText").textContent = decryptedText;
}
