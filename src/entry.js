import { electron } from "webpack";

export default function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.vowelCount = 0;
  this.consonantCount = 0;
}

Entry.prototype.splitTitle = function() {
  let splitTitleArray = this.title.split(" ");
  this.splitTitleArray = splitTitleArray;
};

Entry.prototype.splitBody = function() {
  let splitBodyArray = this.body.split(" ");
  this.splitBodyArray = splitBodyArray;
};

Entry.prototype.wordCount = function() {
  this.splitBody();
  this.splitTitle();
  this.totalWordCount = this.splitTitleArray.length + this.splitBodyArray.length;
};

Entry.prototype.titleVowelAndConsonantCounter = function() {
  this.splitTitle();
  const singleCharSplitTitleArray = this.splitTitleArray.toString().split("");
  const filteredTitleCharArray = singleCharSplitTitleArray.filter(char => /^[a-z]+$/i.test(char));
  filteredTitleCharArray.forEach(char => {
    if (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
      this.vowelCount = this.vowelCount +=1;
    } else {
      this.consonantCount = this.consonantCount +=1;
    }
  });
};

Entry.prototype.bodyVowelAndConsonantCounter = function() {
  this.splitBody();
  const singleCharSplitBodyArray = this.splitBodyArray.toString().split("");
  const filteredBodyCharArray = singleCharSplitBodyArray.filter(char => /^[a-z]+$/i.test(char));
  filteredBodyCharArray.forEach(char => {
    if (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
      this.vowelCount = this.vowelCount +=1;
    } else {
      this.consonantCount = this.consonantCount +=1;
    }
  });
};

Entry.prototype.getFirst8Words = function() {
  this.splitBody();
  eightWordTeaserArray = [];
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
  } else if (this.eightWordTeaser.length === 8) {
    this.entryTeaser = this.eightWordTeaser.join(" ");
  }
};