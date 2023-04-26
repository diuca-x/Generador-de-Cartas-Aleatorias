/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let all_suits = ["♦", "♥", "♠", "♣"];
  let all_numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  change_suit(all_suits, all_numbers);

  //change button
  document.querySelector(".change_suit").addEventListener("click", () => {
    change_suit(all_suits, all_numbers);
  });
};

const change_suit = (all_suits, all_numbers) => {
  //Chosing suit
  let suit = document.querySelectorAll(".suit");
  const random_suit = Math.floor(Math.random() * all_suits.length);
  suit.forEach(x => {
    x.innerHTML = all_suits[random_suit];
    if (all_suits[random_suit] == "♥" || all_suits[random_suit] == "♦") {
      x.style.color = "red";
    } else if (all_suits[random_suit] == "♣" || all_suits[random_suit] == "♠") {
      x.style.color = "black";
    }
  });
  //end of chosing suit
  //chosing number
  let number = document.querySelector(".number");
  const random_number = Math.floor(Math.random() * all_numbers.length);
  number.innerHTML = all_numbers[random_number];
  //end of chosing number
};
