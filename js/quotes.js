const quotes = [
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "Happiness is not something ready made. It comes from your own",
    author: "Dalai Lama",
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Will Durant (summarizing Aristotle)",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "Children are not a distraction from more important work. They are the most important work.",
    author: "C.S. Lewis",
  },
  {
    quote: "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote: "To be in your children’s memories tomorrow, you have to be in their lives today.",
    author: "Barbara Johnson",
  },
  {
    quote: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin",
  },
  {
    quote: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    author: "André Gide",
  }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

