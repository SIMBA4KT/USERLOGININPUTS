// 1. On page load, check if a user is already in storage
window.onload = function() {
  const savedData = localStorage.getItem('userAccount');
  
  if (savedData) {
    // Accessing user's data
    const account = JSON.parse(savedData);
    
    // Auto-fill the username and enable the login button
    document.getElementById('username').value = account.username;
    document.getElementById('loginBtn').disabled = false;
    document.getElementById('message').innerText = `Welcome back, ${account.username}! Please log in.`;
  }
};

let isRegistered = false;

function handleAuth(type) {
  // Grab the values from the input fields
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const display = document.getElementById('message');

localStorage.setItem('userAccount', JSON.stringify({ username: user , password: pass }));
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

    // call an API to verify credentials
  } 
  // 2.SIGN UP HANDLERgit 
  if (type === 'signup') {
    alert("New User Sign In"); // pop-up
    isRegistered = true;       // Grant permission to login
    display.innerText = "Account created! You can now log in.";
    display.style.color = "green";
    return;
  }

  // 3.LOGINHANDLER AFTER SIGNUP 
  if (type === 'login') {
    // Check if they skipped sign up
    if (!isRegistered) {
      display.innerText = "Access Denied: Please sign up first!";
      display.style.color = "orange";
    } else {
      // successful login after registration
      display.innerText = `Welcome back, ${user}!`;
      display.style.color = "blue";
    }
  }
} ; 
