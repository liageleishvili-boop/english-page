const words = [
  { word: "curious", definition: "eager to know or learn something" },
  { word: "clarity", definition: "the quality of being easy to understand" },
  { word: "wander", definition: "to move around without a fixed direction" },
  { word: "delight", definition: "a feeling of great pleasure" },
];

const wordElement = document.querySelector("#daily-word");
const definitionElement = document.querySelector("#word-definition");
const wordButton = document.querySelector("#word-button");
let currentWordIndex = 0;

wordButton.addEventListener("click", () => {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  wordElement.textContent = words[currentWordIndex].word;
  definitionElement.textContent = words[currentWordIndex].definition;
});