/*
* Questão 1 (1 pt): 
*
* Crie dois arrays, um com nome de heart e outro com nome de spade. 
* Escreva nesses arrays cada string contendo o nome dos arquivos de imagem que estão nas respectivas pastas dentro de cards.
* Selecione as duas imagens contidas dentro do html.
* Selecione o botão e também a div com id "resultado".
*/
const heart = ["./cards/heart/2.svg" , "./cards/heart/3.svg" , "./cards/heart/4.svg" , "./cards/heart/5.svg" , "./cards/heart/6.svg" , "./cards/heart/7.svg" , "./cards/heart/8.svg" , "./cards/heart/9.svg" , "./cards/heart/10.svg" ,  "./cards/heart/J.svg" ,"./cards/heart/Q.svg" ,"./cards/heart/K.svg" , "./cards/heart/A.svg"];

const spade = ["./cards/spade/2.svg" , "./cards/spade/3.svg" , "./cards/spade/4.svg" , "./cards/spade/5.svg" , "./cards/spade/6.svg" , "./cards/spade/7.svg" , "./cards/spade/8.svg" , "./cards/spade/9.svg" , "./cards/spade/10.svg" , "./cards/spade/J.svg" ,"./cards/spade/Q.svg" ,"./cards/spade/K.svg" , "./cards/spade/A.svg"];


const spadeimg = document.querySelector("#spade img");
const heartimg = document.querySelector("#heart img");

const buttonSelect = document.querySelectorAll('button');
btn = buttonSelect[0];

let resultado = document.querySelector("#resultado");


/*
* Questão 2 (1 pt): 
* Ao clicar no botão, faça com que as imagens sejam trocadas por outras imagens contidas nos arrays criados na questão 1. 
* Utilize a função getRandomInt para selecionar aleatoriamente um elemento do array.
*/


let cont = 1 ;
let numHeart , numSpade;


btn.addEventListener("click" , (e) => {

    if(cont === 1)
    {
        numHeart = getRandomInt(heart.length);

        heartimg.src = heart[numHeart];

        cont++;
    }
    else if(cont=== 2)
    {
        numSpade = getRandomInt(spade.length);

        spadeimg.src = spade[numSpade];
        
        cont = 0;
        
        if(numSpade > numHeart)
        {
            resultado.innerHTML = "<div><h1>Ganhador Spade</h1></div>";

        }else if (numSpade < numHeart)
        {
            resultado.innerHTML = "<div><h1>Ganhador Heart</h1></div>";

        }else resultado.innerHTML = "<div><h1>EMPATE!!</h1></div>";

    }

})



/*
* Questão 3 (1 pt): 
* Verifique as cartas sorteadas e exiba dentro de um h1 na div com id "resultado" quem foi o vencedor: Espadas (spades) ou Copas (heart). 
* O vencedor será aquele que tiver a carta com o maior valor. 
* Assuma que o Ás é o maior valor e o 2 é o menor. Sendo a sequência de valores: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A.
* Indique também o caso de empate.
*/



/* 
* Função que retorna um número inteiro aleatório entre 0 e o valor máximo passado como parâmetro
*/ 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}