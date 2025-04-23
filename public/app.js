// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBez8JCksrF1tqCS1HptDg2yH__xNhjEFc",
  authDomain: "ducktest-89989.firebaseapp.com",
  projectId: "ducktest-89989",
  databaseURL: "https://ducktest-89989-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "ducktest-89989.firebasestorage.app",
  messagingSenderId: "316320168974",
  appId: "1:316320168974:web:def981bc5df58d396e505f",
  measurementId: "G-H1GN1CJTCJ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const counterRef = ref(db, 'counter');

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const loader = document.getElementById('loading');
const wowSound = new Audio('sounds/wow.mp3')

let lastValue = null;
// Listen for real-time updates
onValue(counterRef, (snapshot) => {
    const value = snapshot.val();

    loader.style.display = 'none';
    counterDisplay.classList.remove('hidden');
    counterDisplay.textContent = value !== null ? value : 0;

    if (value !== lastValue && value % 10 === 0 && value !== 0) {
        wowSound.play();

        star.classList.remove('hidden');
        star.classList.add('show');

        setTimeout(() => {
            star.classList.remove('show');
            star.classList.add('hidden');
        }, 1000);
    }
    lastValue = value;
});

// Update counter on button click
incrementButton.addEventListener('click', () => {
    const newValue = parseInt(counterDisplay.textContent) + 1;
    set(counterRef, newValue)
        .then(() => console.log('Counter updated to', newValue))
        .catch((error) => console.error('Failed to update counter:', error));
});
