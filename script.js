

function summ (){
    let sum = parseFloat(document.querySelector('.price').textContent) * parseFloat(document.querySelector('.number').textContent); 

    document.querySelector('.basket__calc-text').textContent = sum;
}
summ();


const card =  document.querySelectorAll('.basket__calc-text');

console.log(card);

let total = Number(card[0].textContent) + Number(card[1].textContent) + Number(card[2].textContent) + Number(card[3].textContent)

console.log(total);

document.querySelector('.result__total').textContent = total;

function sale () {
    let sales = Number(total)*0.8;
    document.querySelector('.result__total').textContent= sales;
}
