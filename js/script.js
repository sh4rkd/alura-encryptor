const secret_keys = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

encryptText = (text) => {
    let result = "";
    text.split("").forEach(letter => {
        secret_keys[letter] ? result += secret_keys[letter] : result += letter;
    });
    return result;
};

desencryptText = (text) => {
    let result = void(0);
    for (const key in secret_keys) {
        if (Object.hasOwnProperty.call(secret_keys, key)) {
            result = result ? result.replaceAll(secret_keys[key], key) : text.replaceAll(secret_keys[key],key);
        }
    }
    return result;
}

document.getElementById("encrypt").addEventListener("click", () => {
    document.getElementById("encrypt").value = "";
});

document.getElementById("btn-encrypt").addEventListener("click", () => {
    document.getElementById("desencrypt").value = encryptText(document.getElementById("encrypt").value);
    document.getElementById("desencrypt_area--hidden").classList.remove("hidden");
    if (document.getElementById("desencrypt_area--visible")) {
        document.getElementById("desencrypt_area--visible").remove();
    }
});

document.getElementById("btn-desencrypt").addEventListener("click", () => {
    document.getElementById("desencrypt").value = desencryptText(document.getElementById("encrypt").value);
});

document.getElementById("copy-text").addEventListener("click", () => {
    document.getElementById("desencrypt").select();
    document.execCommand('copy')
});