const endpoint = "https://api.quotable.io/random";

const quoteContainer = document.querySelector(".quote");
const quoteText = document.querySelector("#text");
const quoteAuthor = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");

function getQuote() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
      document.body.style.backgroundColor = getRandomColor();
    })
    .catch((error) => console.log(error));
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote();
