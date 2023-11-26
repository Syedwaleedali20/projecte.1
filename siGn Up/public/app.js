var firebaseConfig = {
    apiKey: "AIzaSyA4Z5l1sis-9WGaSOTPJx-PixefO7za4NU",
    authDomain: "assignment-2b4f1.firebaseapp.com",
    projectId: "assignment-2b4f1",
    storageBucket: "assignment-2b4f1.appspot.com",
    messagingSenderId: "172901700783",
    appId: "1:172901700783:web:64866c469e6efc161f305a"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function singup() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        })
}

function login() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}

//
function google() {
    var provider = new firebase.auth.GoogleAuthProvider();
    // var email = document.getElementById("email");
    // var password = document.getElementById("password");
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // IdP data available in result.additionalUserInfo.profile.
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}