let price = document.querySelectorAll('.price');
console.log(price);
let number = document.querySelectorAll('.number');
console.log(number);

let card =  document.querySelectorAll('.basket__calc-text');

summ = (price, number) => {
    sum = price* number; 
return sum;
}

let apple = card[0].textContent = summ(Number(price[0].textContent), Number(number[0].textContent));
let pear = card[1].textContent = summ(Number(price[1].textContent), Number(number[1].textContent));
let fruit = card[2].textContent = summ(Number(price[2].textContent), Number(number[2].textContent));
let oranges = card[3].textContent = summ(Number(price[3].textContent), Number(number[3].textContent));

const total = apple + pear + fruit + oranges;
document.querySelector('.result__total').textContent = total;

const element = document.getElementById('btn');

element.addEventListener('click', sale = () => {
    card[0].textContent = apple *= 0.8;
    card[1].textContent = pear *= 0.8;
    card[2].textContent = fruit *= 0.8;
    card[3].textContent = oranges *= 0.8;
    document.querySelector('.result__total').textContent = total*0.8;
},{ once: true });
