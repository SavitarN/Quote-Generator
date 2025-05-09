generateBtn = document.querySelector('#new-quote');

const quotes = {
    science: [
        { text: "Science is a way of thinking much more than it is a body of knowledge." },
        { text: "The good thing about science is that it's true whether or not you believe in it." },
        { text: "Somewhere, something incredible is waiting to be known." },
        { text: "The important thing is to not stop questioning." },
        { text: "The scientist is not a person who gives the right answers, he's one who asks the right questions." },
        { text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom." },
        { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science." },
        { text: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world." },
        { text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world." },
        { text: "Research is what I'm doing when I don't know what I'm doing." },
        { text: "Science and everyday life cannot and should not be separated." },
        { text: "In science there are no shortcuts to truth." },
        { text: "The good thing about science is that it’s true whether or not you believe in it." },
        { text: "Science is the key to our future, and if you don’t believe in science, then you’re holding everybody back." },
        { text: "The universe is under no obligation to make sense to you." },
        { text: "It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring." },
        { text: "The essence of science is independent thinking, hard work, and not equipment." }
    ],

    life: [
        { text: "Life is what happens when you're busy making other plans." },
        { text: "In the end, it's not the years in your life that count. It's the life in your years." },
        { text: "Life is really simple, but we insist on making it complicated." },
        { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." },
        { text: "It is not length of life, but depth of life." },
        { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well." },
        { text: "Good friends, good books, and a sleepy conscience: this is the ideal life." },
        { text: "Life itself is the most wonderful fairy tale." },
        { text: "Turn your wounds into wisdom." },
        { text: "Difficulties in life are intended to make us better, not bitter." },
        { text: "Life is made of ever so many partings welded together." },
        { text: "Life is short, and it's up to you to make it sweet." },
        { text: "Don't go through life, grow through life." },
        { text: "Life isn't about finding yourself. Life is about creating yourself." },
        { text: "The biggest adventure you can take is to live the life of your dreams." },
        { text: "Live in the sunshine, swim the sea, drink the wild air." },
        { text: "Life is too important to be taken seriously." },
        { text: "To live is the rarest thing in the world. Most people exist, that is all." },
        { text: "Keep calm and carry on." },
        { text: "Life's tragedy is that we get old too soon and wise too late." }
    ],

    philosophy: [
        { text: "The unexamined life is not worth living." },
        { text: "Happiness is not something ready-made. It comes from your own actions." },
        { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
        { text: "Man is the measure of all things." },
        { text: "The only true wisdom is in knowing you know nothing." },
        { text: "I think, therefore I am." },
        { text: "God is dead! He remains dead! And we have killed him." },
        { text: "He who has a why to live can bear almost any how." },
        { text: "Life must be understood backward. But it must be lived forward." },
        { text: "To be is to be perceived." },
        { text: "That which does not kill us makes us stronger." },
        { text: "No man's knowledge here can go beyond his experience." },
        { text: "One cannot step twice in the same river." },
        { text: "The only thing I know is that I know nothing." },
        { text: "You can discover more about a person in an hour of play than in a year of conversation." },
        { text: "Without music, life would be a mistake." },
        { text: "Freedom is secured not by the fulfilling of one's desires, but by the removal of desire." },
        { text: "An unhurried sense of time is in itself a form of wealth." },
        { text: "In everything, there is a share of everything." },
        { text: "The brave man is he who overcomes not only his enemies but his pleasures." }
    ]
};
//getting the elements: //

const category = document.getElementById("Category");
const quoteDisplay = document.querySelector('.quote-display');
const randomBtn = document.getElementById('random');
const nextBtn = document.getElementById('nextQuote');
const prevBtn = document.getElementById('prevQuote');


const themeToggleSwitch = document.querySelector('#theme-toggle');
const body = document.body;

category.addEventListener('change', function () {

    let value = category.value;

    if (value == "philosophy") {
        let randomNumber = Math.floor(Math.random() * quotes.philosophy.length);
        let randomQuote = quotes.philosophy[randomNumber];

        quoteDisplay.innerText = randomQuote.text;

    }
    else if (value == "life") {
        let randomNumber = Math.floor(Math.random() * quotes.life.length);
        let randomQuote = quotes.life[randomNumber];

        quoteDisplay.innerText = randomQuote.text;
    }
    else if (value == "science") {
        let randomNumber = Math.floor(Math.random() * quotes.science.length);
        let randomQuote = quotes.science[randomNumber];

        quoteDisplay.innerText = randomQuote.text;
    }

})
randomBtn.addEventListener('click', function () {

    let selectedCategory = category.value;
    if (selectedCategory) {
        let quotesCategory = quotes[selectedCategory];
        let randomNumber = Math.floor(Math.random() * quotesCategory.length);
        let randomQuote = quotesCategory[randomNumber];

        quoteDisplay.innerText = randomQuote.text;
    }
    else {
        alert('Please Select a Category first')
    }

})

let currentCategoryQuotes = [];
let currentIndex = 0;

function displayQuote(index) {
    if (currentCategoryQuotes.length > 0) {
        quoteDisplay.textContent = currentCategoryQuotes[index].text;
    }
}

function updateQuotesForCategory() {

    const selectedCategory = category.value
    currentCategoryQuotes = quotes[selectedCategory];
    currentIndex = 0;


    console.log(currentCategoryQuotes);

}

category.addEventListener('change', updateQuotesForCategory);

//next quote//
nextBtn.addEventListener('click', function () {
    if (currentCategoryQuotes.length > 0) {
        currentIndex = (currentIndex + 1) % currentCategoryQuotes.length; // Loop around
        displayQuote(currentIndex);
    }
});

//previous code//
prevBtn.addEventListener('click', function () {
    if (currentCategoryQuotes.length > 0) {
        currentIndex = (currentIndex - 1 + currentCategoryQuotes.length) % currentCategoryQuotes.length; // Loop around
        displayQuote(currentIndex);
    }
});


themeToggleSwitch.addEventListener('change', function () {

    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

