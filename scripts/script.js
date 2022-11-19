/*
las funciones y los metodos son lo mismo

unica diferencia: los metodos vienen incrustados a un objeto

cada tipo de objeto tiene sus metodos que otros no tienen

*/


/* ==============theme toggling========= */

let darkModeState = localStorage.getItem("dark-mode");

const body = document.body;
const btn = document.querySelector("#theme");
const preferenceQuery = window.matchMedia("(prefers-color-scheme: dark)");

const addDarkMode = () => {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  btn.innerHTML = 'Dark Mode';

  darkModeState = true;
  localStorage.setItem("dark-mode", darkModeState);
  console.log({ darkModeState })
};

const addLightMode = () => {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  btn.innerHTML = 'Light Mode';

  darkModeState = false;
  localStorage.setItem("dark-mode", darkModeState);
  console.log({ darkModeState })
};


const checkPreference = () => {
  if (preferenceQuery.matches) {
    preferenceQuery.addListener((evt) => toggleTheme(evt.matches));
  }
}


window.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("dark-mode");
  console.log(darkModeState);
  if (darkModeState == "true") {
    addDarkMode();
  } if (darkModeState == 'false') {
    addLightMode();
  } else {
    checkPreference();
  }
});

const toggleTheme = () => {
  !body.classList.contains("dark-mode") ? addDarkMode() : addLightMode();
}
btn.addEventListener("click", toggleTheme);


/* ===============primary menu toggling ======= */


/* ===============sub menu toggling============== */

/* .dropdown es el contenedor, dentro tiene un toggle (que es un link) y una lista
    cuando clickeas el toggle la lista aparece */
let dropdowns = document.querySelectorAll('.dropdown');
//let dropdownsToggles = document.querySelectorAll('.dropdown__toggle');


dropdowns.forEach((dp) => {
  dp.addEventListener('click', () => {
    dp.classList.toggle('is-opened');
  })
})









let bigtoggle = document.getElementById('bigtoggle');
let bigmenu = document.getElementById('bigmenu');


bigtoggle.addEventListener('click', () => bigmenu.classList.toggle('is-opened'))

