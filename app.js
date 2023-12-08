// get my elements from the page
const p = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");

let counter = 0; // my overall count of my clicks

// our function that increases the count AND updates the page
function addOne() {
  // increase my variable by 1
  counter++;

  // update the p tag on the page with a new number
  p.textContent = counter;

  //update localStorage every time I add a number
  localStorage.setItem("counter", counter);
}

// make it so when I click that button, it runs addOne()
increaseBtn.addEventListener("click", addOne);

// when our page loads, run this function to get the counter from storage and update my counter
function getLocalCounter() {
  // get the counter from localStorage
  const localStorageCounter = localStorage.getItem("counter");

  // update my counter variable
  counter = localStorageCounter;

  // update my p tag
  p.textContent = counter;
}

getLocalCounter();
