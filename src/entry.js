// import { electron } from "webpack";

export default function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.vowelCount = 0;
  this.consonantCount = 0;
  this.splitBodyArray = this.body.split(" ");
  this.splitTitleArray = this.title.split(" ");
  this.combinedTitleAndBodyArray = this.splitBodyArray.concat(this.splitTitleArray); 
}

Entry.prototype.wordCount = function() {
  this.totalWordCount = this.splitTitleArray.length + this.splitBodyArray.length;
};

Entry.prototype.vowelAndConsonantCounter = function() {
  const singleCharSplitArray = this.combinedTitleAndBodyArray.toString().split("");
  const filteredCharArray = singleCharSplitArray.filter(char => /^[a-z]+$/i.test(char));
  filteredCharArray.forEach(char => {
    if (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
      this.vowelCount++;
    } else {
      this.consonantCount++;
    }
  });
};

Entry.prototype.getFirst8Words = function() {
  const eightWordTeaserArray = [];
  this.splitBodyArray.forEach(char => {
    if (eightWordTeaserArray.length != 8) {
      eightWordTeaserArray.push(char);
    }
  });
  this.eightWordTeaser = eightWordTeaserArray;
};

Entry.prototype.getTeaser = function() {
  this.getFirst8Words();
  const firstSentence = this.body.split(". ", 1)[0].split(" ");
  if (firstSentence.length < 8) {
    this.entryTeaser = firstSentence.join(" ");
  } else {
    this.entryTeaser = this.eightWordTeaser.join(" ");
  }
};