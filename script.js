document.getElementById("startPomodoro").addEventListener("click", () => {
    pomodoro();
});

function pomodoro() {
    let tempoTotal = 4; 
    let tempo = tempoTotal * 60; 
    const contador = document.getElementById("contador");
   
    const tempoCaindo = setInterval(() => {
        const minutos = String(Math.floor(tempo / 60)).padStart(2, '0'); 
        const segundos = String(tempo % 60).padStart(2, '0'); 
        contador.textContent = `${minutos}:${segundos}`; 
        console.log(tempo);
        tempo--; 
        if (tempo < 0) {
            clearInterval(tempoCaindo);
            contador.textContent = "Tempo esgotado!";
            console.log("Tempo esgotado!");
        }
    }, 1000);
}