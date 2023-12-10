const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "It's fine to celebrate success, but it is more important to heed the lessons of failure. - Bill Gates",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "When in a tough situation, remember you are not alone. Others have faced similar situations and succeeded. - Catherine Pulsifer",
    
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = randomQuote;
  }
