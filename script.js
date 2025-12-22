const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Believe you can and you're halfway there.",
  "Do one thing every day that scares you.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "The only way to do great work is to love what you do.",
  "Failure is the condiment that gives success its flavor.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't watch the clock; do what it does. Keep going.",
  "Dream big and dare to fail.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success is what comes after you stop making excuses.",
  "Don’t wait for opportunity. Create it.",
  "The key to success is to focus on goals, not obstacles.",
  "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
  "Motivation is what gets you started. Habit is what keeps you going."
];

const quoteText = document.getElementById('quote');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
