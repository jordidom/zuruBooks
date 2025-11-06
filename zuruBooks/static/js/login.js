document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validación básica
        if (username === "" || password === "") {
            errorMsg.textContent = "Por favor, completa todos los campos.";
            return;
        }

        // Aquí simulamos credenciales correctas
        const usuarioCorrecto = "admin";
        const passwordCorrecta = "1234";

        if (username === usuarioCorrecto && password === passwordCorrecta) {
            errorMsg.textContent = "";
            alert("Inicio de sesión exitoso");
            window.location.href = "cartelera.html"; // Redirección
        } else {
            errorMsg.textContent = "Usuario o contraseña incorrectos.";
        }
    });
});