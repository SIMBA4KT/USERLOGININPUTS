//check if a user is already in storage
window.onload = function() {
  const message = document.getElementById('message');
  const savedAccount = JSON.parse(localStorage.getItem('userAccount'));

   if (savedAccount) {
    document.getElementById('username').value = savedAccount.username;
    message.innerText = `Welcome back, ${savedAccount.username}! Please log in.`;
  } else {
    message.innerText = "Please login or sign up.";
    return;
  }
}
let clients= JSON.parse(localStorage.getItem('userList')) || [];

// 1. AUTHENTICATION HANDLER
  function handleAuth(type) {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const display = document.getElementById('message');

  // validation
  if (!user || !pass) {
    display.innerText = "Please fill in all fields.";
    display.style.color = "red";
    return;
  }

  // 2.SIGN UP HANDLER
  if (type === 'signup') {
    const userExists = clients.some(u => u.username === user);
    
    if (userExists) {
      display.innerText = "Username already exists. Try a different one!";
      display.style.color = "orange";
    } else {
      // Add client to array
      clients.push({ username: user, password: pass });
      localStorage.setItem('userList', JSON.stringify(clients));
      localStorage.setItem('userAccount', JSON.stringify({ username: user }));
      display.innerText = "Account created successfully!";
      display.style.color = "green";
      alert("New Client Registered");
    }
   } else if (type === 'login') {
    // 4. matching username in the array
    const foundClient = clients.find(u => u.username === user && u.password === pass);

    if (foundClient) {
      display.innerText = `Welcome back, ${user}!`;
      display.style.color = "blue";
    } else {
      display.innerText = "Invalid credentials. Please try again.";
      display.style.color = "red";
    }
  }
};