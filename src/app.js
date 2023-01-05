/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let getRandomInt = Math.floor(Math.random() * who.length);
  let getRandomAct = Math.floor(Math.random() * action.length);
  let getRandomWhat = Math.floor(Math.random() * what.length);
  let getRandomWhen = Math.floor(Math.random() * what.length);

  return (
    who[getRandomInt] +
    " " +
    action[getRandomAct] +
    " " +
    what[getRandomWhat] +
    " " +
    when[getRandomWhen]
  );
};
