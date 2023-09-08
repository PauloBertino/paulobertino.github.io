const darkModeButton = document.getElementById("dark-mode-button");
const body = document.body;
const menu = document.querySelector(".hamburger-menu"); // Selecciona el menú hamburguesa

// Función para habilitar el modo oscuro
function enableDarkMode() {
  body.classList.add("dark-mode");
  menu.classList.add("dark-mode"); // Agrega la clase al menú hamburguesa
}

// Función para deshabilitar el modo oscuro
function disableDarkMode() {
  body.classList.remove("dark-mode");
  menu.classList.remove("dark-mode"); // Quita la clase del menú hamburguesa
}

// // Toggle del modo oscuro al hacer clic en el botón deslizable
// darkModeButton.addEventListener("click", function () {
//   if (body.classList.contains("dark-mode")) {
//     disableDarkMode();
//   } else {
//     enableDarkMode();
//   }
// });

// Función para abrir o cerrar el menú hamburguesa
function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menuLinks.classList.toggle("open");
  icon.classList.toggle("open");
}

// Función para activar o desactivar el modo oscuro
// Función para activar o desactivar el modo oscuro
function toggleDarkMode() {
  const desktopIcon  = document.getElementById("dark-mode-icon");
  const hamburgerIcon = document.getElementById("hamburger-dark-mode-icon");
  const button = document.getElementById("dark-mode-button");

  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
    desktopIcon.classList.remove("fas", "fa-moon");
    desktopIcon.classList.add("far", "fa-sun"); // Cambia el icono a sol

    hamburgerIcon.classList.remove("fas", "fa-moon");
    hamburgerIcon.classList.add("far", "fa-sun"); // Cambia el icono a sol
  } else {
    enableDarkMode();
    desktopIcon.classList.remove("far", "fa-sun");
    desktopIcon.classList.add("fas", "fa-moon"); // Cambia el icono a luna

    hamburgerIcon.classList.remove("far", "fa-sun");
    hamburgerIcon.classList.add("fas", "fa-moon"); // Cambia el icono a luna
  }
}


