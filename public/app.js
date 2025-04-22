// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBez8JCksrF1tqCS1HptDg2yH__xNhjEFc",
  authDomain: "ducktest-89989.firebaseapp.com",
  projectId: "ducktest-89989",
  storageBucket: "ducktest-89989.firebasestorage.app",
  messagingSenderId: "316320168974",
  appId: "1:316320168974:web:def981bc5df58d396e505f",
  measurementId: "G-H1GN1CJTCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const counterRef = ref(db, 'counter');

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');

// Listen for real-time updates
onValue(counterRef, (snapshot) => {
    const value = snapshot.val();
    counterDisplay.textContent = value !== null ? value : 0;
});

// Update counter on button click
incrementButton.addEventListener('click', () => {
    const newValue = parseInt(counterDisplay.textContent) + 1;
    set(counterRef, newValue);
});
