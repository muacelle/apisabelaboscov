const refreshRandom = document.querySelector('.random .refresh')

refreshRandom.addEventListener('click', async function newRandomQuote() {
    let data = await fetch('https://isaboscov-api.herokuapp.com/quotes/random');
    let result = await data.json();
    console.log(result);
})

/*async function getRandomQuote() {
    let result = await fetch('https://isaboscov-api.herokuapp.com/quotes/random');
    console.log(result);
    return result;
}*/