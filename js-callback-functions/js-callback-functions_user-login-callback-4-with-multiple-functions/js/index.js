console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

// Create named function "showWelcomeMessage"
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

// Create a named function "showErrorMessage"
function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

// Call handleUserLogin with "Jane Doe" userName
handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

// Call handleUserLogin with "John Doe" userName
handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");
