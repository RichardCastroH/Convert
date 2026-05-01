const USD = 5.16;
const EUR = 5.85;
const GBP = 6.75;

const form = document.querySelector('form');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');
const amount = document.getElementById('amount');


amount.addEventListener('input', ()=>{

    const hasCharacterRegex = /\D+/g;

    amount.value = amount.value.replace(hasCharacterRegex, '');

})

form.onsubmit = (event)=>{
    event.preventDefault();

    switch (currency.value){
        case 'USD':
            convertCurrency(amount.value, USD, '$');
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, '£');
            break;
    }

}

function convertCurrency (amount, price, symbol) {

   try{

    footer.classList.add('show-result')

    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price;

    total = formatCurrencyBRL(total).replace('R$', "")

    result.textContent = `${total} Reais`

   } catch (error){
    footer.classList.remove('show-result')
    console.error(error);
    alert("Tente novamente mais tarde.");
   }   
}

function formatCurrencyBRL (value) {
    return value.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });
}