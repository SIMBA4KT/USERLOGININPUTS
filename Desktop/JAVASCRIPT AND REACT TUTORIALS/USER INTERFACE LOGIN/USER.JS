function handleAuth(type) {
  // Grab the values from the input fields
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const display = document.getElementById('message');

  // Basic validation
  if (!user || !pass) {
    display.innerText = "Please fill in all fields.";
    display.style.color = "red";
    return;
  }

  // Handle the logic based on the button clicked
  if (type === 'login') {
    display.innerText = `Attempting to login as: ${user}`;
    display.style.color = "blue";
    // Here you would typically call an API to verify credentials
  } else {
    display.innerText = `Creating account for: ${user}`;
    display.style.color = "green";
    // Here you would typically call an API to save the user
  }
}