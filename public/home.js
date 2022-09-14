const refreshRandom = document.querySelector('.random .refresh');
refreshRandom.addEventListener('click', async function newRandomQuote() {
    let data = await fetch('https://isaboscov-api.herokuapp.com/quotes/random');
    let result = await data.json();

    let quote = document.querySelector('.random .quote');
    quote.innerText = result.quote;
})

const refreshSubject = document.querySelector('.bysubject .refresh');
refreshSubject.addEventListener('click', async function newBySubject() {
    let data = await fetch('https://isaboscov-api.herokuapp.com/quotes/Angelina Jolie');
    let result = await data.json();
    let index = Math.floor(Math.random() * (result.length));
    console.log(index);

    let quote = document.querySelector('.bysubject .quote');
    quote.innerText = result[index].quote;
})