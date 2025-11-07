//recupera solo el primer boton que se encuentre
/* const boton = document.querySelector('.button-apply-job'); */

//si encuentra mucho devuelve una lista o una lista vacia si no encuentra ninguno
/* const botones = document.querySelectorAll('.button-apply-job');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
    boton.textContent = "!Aplicado";
    boton.classList.add('is-applied');
    boton.disabled = true;
})
}) */

import './fetch-data.js';
import './filter.js';
import './apply-button.js';
import './devjob-avatar-element.js';
