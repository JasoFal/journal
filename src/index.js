import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Entry from "./entry";
// import { entry } from "../webpack.config";

function createEntry() {
  let entryTitle = document.querySelector("input#title").value;
  let entryBody = document.querySelector("#body").value;
  let entry = new Entry(entryTitle, entryBody);
  entry.wordCount();
  entry.vowelAndConsonantCounter();
  entry.getTeaser();
  return entry;
}

function hideFormInputAndShowEntryZone() {
  const element1 = document.getElementById("form-zone");
  element1.classList.add("hidden");
  const element2 = document.getElementById("entry-main-div");
  element2.classList.remove("hidden");
}

document.querySelector("form#entry-input").addEventListener("submit", (event) => {
  event.preventDefault();
  let entry = createEntry();
  document.querySelector("p#entry-teaser").innerText = entry.entryTeaser;
  document.querySelector("span#word-count").innerText = entry.totalWordCount;
  document.querySelector("span#vowel-count").innerText = entry.vowelCount;
  document.querySelector("span#consonant-count").innerText = entry.consonantCount;
  document.querySelector("p#entry-title").innerText = entry.title;
  document.querySelector("p#entry-body").innerText = entry.body;
  hideFormInputAndShowEntryZone();
});