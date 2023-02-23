let quote = document.getElementById('quote');
let quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', () => {
    let fakeQuote = document.createElement("h3");
    fakeQuote.classList.add("fakeQuote");
    quote.appendChild(fakeQuote);
    
    let qks = document.querySelector(".fakeQuote");

    fetch("https://api.quotable.io/random")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
      let generatedQuote = data.content;
      qks.innerText = generatedQuote;
    })
    .catch((err)=>
    {
        console.log(err);
    });
});