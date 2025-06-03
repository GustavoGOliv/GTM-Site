document.getElementById("openLanguageModal").onclick = function() {
  document.getElementById("languageModal").style.display = "block";
};

document.querySelector(".close").onclick = function() {
  document.getElementById("languageModal").style.display = "none";
};

window.onclick = function(event) {
  const modal = document.getElementById("languageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function toggleSenha() {
  const input = document.getElementById("senha");
  const icon = document.querySelector(".toggle-password i");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function checkSenhaInput() {
  const input = document.getElementById("senha");
  const btn = document.getElementById("toggleSenhaBtn");
  const icon = btn.querySelector("i");

  if (input.value.trim() === "") {
    btn.style.display = "none";
    input.type = "password"; // volta para o modo seguro
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye"); // reseta o ícone
  } else {
    btn.style.display = "block";
  }
}


