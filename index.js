var firebaseConfig = {
    apiKey: "AIzaSyBDdIwSsdQ-29jfyA6IfV5U-8SSmA-7iVM",
    authDomain: "pommy-a7657.firebaseapp.com",
    projectId: "pommy-a7657",
    storageBucket: "pommy-a7657.appspot.com",
    messagingSenderId: "404036371992",
    appId: "1:404036371992:web:a040d94f696e6dbc7ce56d",
    measurementId: "G-B02R9C6K2M"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const database = firebase.database();


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert('Please fill out all the required fields.');
        return;
    }
    database.ref('resume_contact').push({
        Name: name,
        Email: email,
        Phone: phone,
        Message: message
    }, function (error) {
        if (error) {
            console.log('Data could not be saved.' + error);
        } else {
            console.log('Data saved successfully.');
            alert('Feedback successfully recorded');
        }
    });
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
});