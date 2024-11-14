   // Función para seleccionar usuario y redirigir al teclado
   function selectUser(userId) {
    localStorage.setItem("selectedUserId", userId); // Guardar en localStorage
    window.location.href = "/teclado.html";
}

// Funciones para el teclado numérico
function addDigit(digit) {
    document.getElementById("passwordDisplay").value += digit;
}

function clearDisplay() {
    document.getElementById("passwordDisplay").value = '';
}

function backspace() {
    const display = document.getElementById("passwordDisplay");
    display.value = display.value.slice(0, -1);
}

// Enviar contraseña al servidor
async function submitPassword() {
    const password = document.getElementById("passwordDisplay").value;
    const userId = localStorage.getItem("selectedUserId"); // Recuperar el ID de usuario desde localStorage

    if (!userId) {
        alert("Por favor seleccione un usuario primero.");
        window.location.href = "/index.html";
        return;
    }

    try {
        const response = await fetch('/api/auth/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, password })
        });

        const data = await response.json();
        if (data.success) {
            sessionStorage.setItem("sessionUserId", userId); // Guardar el ID de usuario autenticado en sessionStorage
            window.location.href = "/dashboard.html"; // Redirigir al dashboard
        } else {
            alert("Contraseña incorrecta");
        }
    } catch (error) {
        console.error("Error al verificar la contraseña:", error);
        alert("Hubo un error al verificar la contraseña.");
    }
}


function goBackToIndex() {
    window.location.href = 'index.html'; // Asegúrate de que la ruta sea correcta
}