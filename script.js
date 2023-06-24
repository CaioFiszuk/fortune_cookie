//Variaveis
const cookie = document.querySelector("#cookie");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let fortune = document.querySelector(".fortune");
const btnCookie = document.querySelector(".btnCookie");

//Eventos
cookie.addEventListener('click', openCookie);

btnCookie.addEventListener('click', closeCookie);

document.addEventListener('keydown', function(event){
    if(event.key == 'Enter' && screen2.classList.contains('hide')){
       openCookie();
    }
});

//Funções
function proverbs(){
    const proverbs = [
        'A pessoa irada provoca conflitos, quem perde a calma facilmente comete muitos pecados (Pv 29.22)', 
        'Meter-se em discussão alheia é como puxar um cachorro pelas orelhas (Pv 26.17)',
        'Começar uma briga é como abrir a compota de uma represa; portanto pare antes que irrompa a discussão (Pv 17.14)',
        'Quem se ira facilmente provoca brigas, mas quem tem paciência acalma a discussão (Pv 15.18)'
    ];

    let proverb = Math.floor(Math.random()*proverbs.length);

    return proverbs[proverb];
}

function openCookie(){
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
    fortune.innerHTML = proverbs();
}

function closeCookie(event){
    event.preventDefault();
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
}

