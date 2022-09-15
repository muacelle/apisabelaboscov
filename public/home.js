document.querySelector('.random .refresh').onclick = async () => {
    let data = await fetch('https://isaboscov-api.herokuapp.com/quotes/random');
    let result = await data.json();

    let quote = document.querySelector('.random .quote');
    quote.innerText = result.quote;
}

document.querySelector('.bysubject .refresh').onclick = async () => {
    let data = await fetch('https://isaboscov-api.herokuapp.com/quotes/Angelina Jolie');
    let result = await data.json();
    let index = Math.floor(Math.random() * (result.length));

    let quote = document.querySelector('.bysubject .quote');
    quote.innerText = result[index].quote;
}

document.querySelector('.byID .refresh').onclick = async () => {
    let quoteslist = await fetch('https://isaboscov-api.herokuapp.com/quotes');
    let json = await quoteslist.json();
    let randomID = Math.ceil(Math.random() * (json.length - 1));
    console.log(randomID);

    let link = document.querySelector('.byID .endpoint .idlink');
    link.setAttribute('href', `https://isaboscov-api.herokuapp.com/quotes/id/${randomID}`);

    let textLink = document.querySelector('.byID .endpoint .id');
    textLink.innerText = randomID;

    let data = await fetch(`https://isaboscov-api.herokuapp.com/quotes/id/${randomID}`);
    let result = await data.json();

    let quote = document.querySelector('.byID .quote');
    quote.innerText = result.quote;
}