//logica sin tener que iterar unicamente con la delegacion de eventos
const jobsListenSection = document.querySelector(".jobs-listings");

//optional chaining el signo hace que pregunte anteriormente o valide antes para seguir ejecutando, para no usar un if
jobsListenSection?.addEventListener('click', function(event){
    const elemento = event.target;

    if(elemento.classList.contains('button-apply-job')){
        elemento.textContent = "!Aplicado";
        elemento.classList.add('is-applied');
        elemento.disabled = true;
    }
    
})