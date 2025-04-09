const ducks = [
    "🦆", "🦢", "🦩", "🦦", "🦔"
];

// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);

// Add ducks to the page
const duckContainer = document.getElementById('duck-container');

function addDuck() {
    const duck = ducks[Math.floor(Math.random() * ducks.length)];
    const duckDiv = document.createElement('div');
    duckDiv.classList.add('duck');
    duckDiv.innerHTML = duck;
    duckDiv.style.position = 'absolute';
    duckDiv.style.top = `${Math.random() * 90}%`;
    duckDiv.style.left = `${Math.random() * 90}%`;
    duckDiv.style.fontSize = `${Math.random() * 30 + 20}px`;
    duckDiv.style.animation = 'fly 5s infinite linear';
    duckContainer.appendChild(duckDiv);
}

document.getElementById('actionButton').addEventListener('click', () => {
    addDuck();
});
