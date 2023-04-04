

function summ (){
    let sum = parseFloat(document.querySelector('.price').textContent) * parseFloat(document.querySelector('.number').textContent); 

    document.querySelector('.basket__calc-text').textContent = String(sum);
}
summ();


const card =  document.querySelectorAll('.basket__calc-text').textContent;

console.log(card);
// let total = 
