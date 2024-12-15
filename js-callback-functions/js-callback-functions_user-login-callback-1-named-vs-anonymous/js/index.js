console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  console.log("Welcome! You are logged in now");
}

// Call handleUserLogin below!
handleUserLogin(showWelcomeMessage);

// Call handleUserLogin with anonymous arrow function as callback
handleUserLogin(function () {
  console.log("Welcome! You are logged in now.");
});
