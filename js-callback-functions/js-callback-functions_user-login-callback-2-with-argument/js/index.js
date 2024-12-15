console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

// Create function "showWelcomeMessage"
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

// Call handleUserLogin with callback function
handleUserLogin(showWelcomeMessage);

// Call handleUserLogin with anonymous function as callback
handleUserLogin(function (userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
});
