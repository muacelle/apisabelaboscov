const refreshRandom = document.querySelector('.random .refresh');

refreshRandom.addEventListener('click', async function newRandomQuote() {
    let data = await fetch('https://isaboscov-api.herokuapp.com/quotes/random');
    let result = await data.json();

    let quote = document.querySelector('.random .quote');
    quote.innerText = result.quote;

    console.log(result.quote);
})