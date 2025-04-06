const quotes = [
  {
    quote: "길이 있는 곳으로 가지 말고, 길이 없는 곳에 가서 발자취를 남겨라.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "지금부터라도 당신이 될 수 있었던 사람이 되는 데 늦지 않았다.",
    author: "조지 엘리엇",
  },
  {
    quote: "행복은 준비된 것이 아니라, 당신 스스로 만들어가는 것이다.",
    author: "달라이 라마",
  },
  {
    quote: "우리는 반복적으로 하는 그것이 곧 우리다. 그러므로 탁월함은 행동이 아니라 습관이다.",
    author: "윌 듀런트 (아리스토텔레스 요약)",
  },
  {
    quote: "진정한 지혜는 아무것도 모른다는 것을 아는 데서 시작된다.",
    author: "소크라테스",
  },
  {
    quote: "아이들은 더 중요한 일을 방해하는 존재가 아니라, 가장 중요한 일이다.",
    author: "C.S. 루이스",
  },
  {
    quote: "사랑은 서로를 바라보는 것이 아니라, 함께 같은 방향을 바라보는 것이다.",
    author: "생텍쥐페리",
  },
  {
    quote: "아이들의 내일 기억 속에 있으려면, 오늘 그들의 삶에 있어야 한다.",
    author: "바버라 존슨",
  },
  {
    quote: "삶은 용기의 크기만큼 줄어들기도 하고 커지기도 한다.",
    author: "아나이스 닌",
  },
  {
    quote: "사람은 해안을 잃을 용기가 없으면 새로운 바다를 발견할 수 없다.",
    author: "앙드레 지드",
  }
];

const quoteText = document.querySelector("#quote-text");
const authorText = document.querySelector("#quote-author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteText.innerText = `"${todaysQuote.quote}"`;
authorText.innerText = `– ${todaysQuote.author}`;
