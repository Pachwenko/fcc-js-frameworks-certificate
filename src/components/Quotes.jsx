import { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState({});
  const fetchQuote = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await response.json();
    let randomQuote =
      data.quotes[Math.floor(Math.random() * data.quotes.length)];
    let twitterUrl =
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + randomQuote.quote + '" ' + randomQuote.author);
    randomQuote.twitterUrl = twitterUrl;
    setQuote(randomQuote);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container mx-auto flex flex-col px-4 py-6 bg-gray-700 text-center w-3/4 md:h-1/2 h-3/4 justify-center rounded shadow-xl">
      <h1
        className="container-md text-lg font-bold text-center h-1/2"
        id="text"
      >
        "{quote.quote}"
      </h1>
      <h2
        className="m-2 text-xl font-bold italic h-1/3 justify-start"
        id="author"
      >
        - {quote.author}
      </h2>
      <button
        id="new-quote"
        className="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 h-1/6 shadow-lg"
        onClick={fetchQuote}
      >
        New Quote
      </button>
      <br />
      <a
        href={quote.twitterUrl}
        id="tweet-quote"
        target="_top"
        rel="external nofollow noopener noreferrer"
        className="font-xl font-bold pt-2 underline text-gray-100 hover:text-purple-800 visited:text-purple-600 h-1/6"
      >
        Tweet Quote
      </a>
    </div>
  );
}
