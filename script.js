// words which we'll use to generate random messages
const words1 = ['quick', 'lazy', 'happy', 'sad', 'angry', 'hungry', 'thirsty', 'tired', 'sleepy', 'awake'];
const words2 = ['dog', 'cat', 'bird', 'fish', 'rabbit', 'hamster', 'turtle', 'lizard', 'snake', 'frog'];
const words3 = ['fox', 'dog', 'cat', 'mouse', 'bird', 'fish', 'rabbit', 'hamster', 'turtle', 'lizard', 'snake', 'frog'];
const words4 = ['jumped', 'ran', 'walked', 'swam', 'flew', 'crawled', 'hopped', 'slithered', 'scurried', 'scampered'];

// function for generate random messages
function generateRandomMessage() {
    const randomWord1 = words1[Math.floor(Math.random() * words1.length)];
    const randomWord2 = words2[Math.floor(Math.random() * words2.length)];
    const randomWord3 = words3[Math.floor(Math.random() * words3.length)];
    const randomWord4 = words4[Math.floor(Math.random() * words4.length)];
    return `The ${randomWord1} ${randomWord2} ${randomWord4} over the ${randomWord3}.`;
}

console.log(generateRandomMessage());