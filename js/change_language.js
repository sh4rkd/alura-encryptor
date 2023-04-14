import { languages } from './languages.js';

const languageSelect = document.getElementById('language-select');
const encryptArea = document.querySelector(".encrypt-area");
const info = document.querySelector(".info");
const desencryptH2 = document.querySelector(".desencrypt_h2--visible");
const desencryptP = document.querySelector(".desencrypt_p--visible");
const copyTextBtn = document.getElementById("copy-text");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDesencrypt = document.getElementById("btn-desencrypt");
const optionLanguage = document.querySelector(".option-language");

languageSelect.addEventListener('change', () => {
    const selectedLanguageIndex = languageSelect.value;
    const selectedLanguage = languages[selectedLanguageIndex];
  
    // Cambiar los textos de la página
    optionLanguage.textContent = selectedLanguage["option-language"]
    encryptArea.setAttribute("placeholder", selectedLanguage["encrypt-area"]);
    encryptArea.defaultValue = selectedLanguage["encrypt-area"];
    info.textContent = selectedLanguage.info;
    desencryptH2.textContent = selectedLanguage['desencrypt_h2--visible'];
    desencryptP.textContent = selectedLanguage['desencrypt_p--visible'];
    copyTextBtn.textContent = selectedLanguage['copy-text'];
    btnEncrypt.textContent = selectedLanguage['btn-encrypt'];
    btnDesencrypt.textContent = selectedLanguage['btn-desencrypt'];
  });