const secret_keys = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

const encryptText = (text) => {
    return text.split("").map(letter => secret_keys[letter] || letter).join("");
  };
  

  const desencryptText = (text) => {
    Object.entries(secret_keys).forEach(([key, value]) => {
      text = text.replaceAll(value, key);
    });
    return text;
  };
  

document.getElementById("encrypt").addEventListener("click", () => {
    document.getElementById("encrypt").value = "";
});

document.getElementById("btn-encrypt").addEventListener("click", () => {
    document.getElementById("desencrypt").value = encryptText(document.getElementById("encrypt").value);
    const hiddenArea = document.getElementById("desencrypt_area--hidden");
    hiddenArea.classList.remove("hidden");
    const visibleArea = document.getElementById("desencrypt_area--visible");
    if (visibleArea) {
      visibleArea.parentNode.removeChild(visibleArea);
    }
  });
  

document.getElementById("btn-desencrypt").addEventListener("click", () => {
    document.getElementById("desencrypt").value = desencryptText(document.getElementById("encrypt").value);
});

document.getElementById("copy-text").addEventListener("click", () => {
    document.getElementById("desencrypt").select();
    document.execCommand('copy')
});