import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 1. YOUR FIREBASE CONFIG (Replace with your actual details from Firebase Console)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- 2. SELECTING ELEMENTS ---
const subscribeBtn = document.querySelector('.subscription');
const emailInput = document.querySelector('.emails'); // Currently a button in your HTML
const flightRequestBtn = document.querySelector('.REQUEST-BUTTON');
const showEstimatesBtn = document.querySelector('.SHOWESTIMATES');
const enquireBtn = document.querySelector('.Enquires');

// --- 3. NEWSLETTER FUNCTIONALITY ---
subscribeBtn.addEventListener('click', async () => {
    // If you keep it as a button, we use textContent. If you change to <input>, use .value
    const email = emailInput.value || emailInput.textContent;

    if (!email || email.includes("Your email")) {
        alert("Please enter a valid email address.");
        return;
    }

    try {
        await addDoc(collection(db, "newsletter_signups"), {
            email: email,
            status: "subscribed",
            timestamp: new Date()
        });
        alert("Success! You've been added to our newsletter.");
        emailInput.textContent = "Your email address"; // Reset
    } catch (error) {
        console.error("Error saving to Firebase: ", error);
        alert("Something went wrong. Please try again.");
    }
});

// --- 4. FLIGHT SEARCH MOCKUP ---
showEstimatesBtn.addEventListener('click', () => {
    const fromLocation = document.querySelector('.jay').textContent;
    const passengers = document.querySelector('.PASSENGERS').textContent;

    alert(`Searching for flights from ${fromLocation} for ${passengers}...`);
    // Here you would typically redirect to a search results page
});

// --- 5. SMOOTH SCROLL FOR "DISCOVER MORE" ---
const discoverBtn = document.querySelector('.DISCOVER');
discoverBtn.addEventListener('click', () => {
    document.querySelector('.background-pic2').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// --- 6. SIMPLE UI INTERACTION ---
// Make the 'Enquire Now' button flash or change color when clicked
enquireBtn.addEventListener('mousedown', () => {
    enquireBtn.style.transform = "scale(0.95)";
});
enquireBtn.addEventListener('mouseup', () => {
    enquireBtn.style.transform = "scale(1)";
    alert("Our concierge will be with you shortly!");
});