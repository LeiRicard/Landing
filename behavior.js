console.log("behavior.js is running");

const title = document.querySelector(".page-title");
const button = document.querySelector(".shout-button");

function showProducts() {
  title.textContent = "Nos produits faits pour vous";
}

button.addEventListener("click", showProducts);


const email = document.querySelector(".email");
const copyButton = document.querySelector(".copy-email");

function copyEmail() {
  navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copié !";

  setTimeout(function () {
    copyButton.textContent = "Copier l'email";
  }, 2000);
}

copyButton.addEventListener("click", copyEmail);

  
