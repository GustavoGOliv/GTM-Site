function toggleSenha(inputId, btnId) {
  const input = document.getElementById(inputId);
  const icon = document.querySelector(`#${btnId} i`);

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

function checkSenhaInput(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  const icon = btn.querySelector("i");

  if (input.value.trim() === "") {
    btn.style.display = "none";
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    btn.style.display = "block";
  }
}