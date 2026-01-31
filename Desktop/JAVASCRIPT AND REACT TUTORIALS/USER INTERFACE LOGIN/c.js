// 1. Initial page load setup
window.onload = function() {
  const display = document.getElementById('message');
  // We don't auto-fill passwords for security, just show a message
  display.innerText = "Welcome! Please Sign up or Log in.";
};

// 2. The SINGLE, corrected Auth function
function handleAuth(type) {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const display = document.getElementById('message');

  if (!user || !pass) {
    display.innerText = "Please fill in all fields.";
    display.style.color = "red";
    return;
  }

  // Fetch the latest list of users from storage 
  let clients = JSON.parse(localStorage.getItem('userList')) || [];

  // --- SIGN UP LOGIC ---
  if (type === 'signup') {
    // Check if the name is already taken
    const userExists = clients.some(u => u.username === user);
    
    if (userExists) {
      display.innerText = "Error: Username already exists!";
      display.style.color = "orange";
    } else {
      // Add new user object to the array
      clients.push({ username: user, password: pass });
      // Save the updated array back to storage
      localStorage.setItem('userList', JSON.stringify(clients));
      
      display.innerText = "Account created! You can now log in.";
      display.style.color = "green";
      alert("Registration Successful!");
    }
  } 

  // --- LOGIN LOGIC ---
  else if (type === 'login') {
    // Search the array for a matching username AND password
    const foundUser = clients.find(u => u.username === user && u.password === pass);

    if (foundUser) {
      display.innerText = `Success! Welcome back, ${user}.`;
      display.style.color = "blue";
      // Optional: window.location.href = "dashboard.html"; 
    } else {
      display.innerText = "Access Denied: Invalid username or password.";
      display.style.color = "red";
    }
  }
}