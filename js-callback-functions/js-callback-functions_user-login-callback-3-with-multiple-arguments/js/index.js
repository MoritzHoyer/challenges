console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

// Create named function
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

// Call handleUserLogin with named callback function
handleUserLogin(showWelcomeMessage);

// Call handleUserLogin with anonymous function as callback
handleUserLogin(function (userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
});
