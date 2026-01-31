//check if a user is already in storage
window.onload = function() {

  if (savedData) {
    // Accessing user's data
    const account = JSON.parse(savedData);
    const savedData = localStorage.getItem('userAccount');

    // Auto-fill the username and enable the login button
    document.getElementById('username').value = account.username;
    document.getElementById('message').innerText = `Welcome back, ${account.username}! Please log in.`;
  } else if (!savedData) {
    userAccount = null;
    this.document.getElementById('username').value = '';
    this.document.getElementById('password').value = '';
    document.getElementById('message').innerText = "Please sign up.";
  }
};

const savedAccount = JSON.parse(localStorage.getItem('userAccount'));
let clients= [JSON.parse(localStorage.getItem('userAccount')) || []];
 

function handleAuth(type) {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const display = document.getElementById('message');

localStorage.setItem('userAccount', JSON.stringify({ username: user }));

  // validation
  if (!user || !pass) {
    display.innerText = "Please fill in all fields.";
    display.style.color = "red";
    return;
  }

  // IF USER CLICKS LOGIN
  if (type === 'login') {
    display.innerText = `Attempting to login as: ${user}`;
    display.style.color = "blue";

  } 
  // 2.SIGN UP HANDLER
  if (type === 'signup') {
    const userExists = clients.some(u => u.username === user);
    
    if (userExists) {
      display.innerText = "Username already exists. Try a different one!";
      display.style.color = "orange";
    } else {
      // Add to array
      clients.push({ username: user, password: pass });
      localStorage.setItem('userList', JSON.stringify(clients));
      localStorage.setItem('userAccount', JSON.stringify({ username: user }));
      display.innerText = "Account created successfully!";
      display.style.color = "green";
      alert("New User Registered");
    }
   } else if (type === 'login') {
    // 4. Look for a matching user in the array
    const foundClient = clients.find(u => u.username === user && u.password === pass);

    if (foundClient) {
      display.innerText = `Welcome back, ${user}!`;
      display.style.color = "blue";
    } else {
      display.innerText = "Invalid credentials. Please try again.";
      display.style.color = "red";
    }
  }
}