// JavaScript source code
// Get a reference to the database service

src = "https://www.gstatic.com/firebasejs/5.5.1/firebase.js"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDkaUpgh9idin25SJLG80F-WJ_80jT6LFw",
    authDomain: "musical-education-db-sj.firebaseapp.com",
    databaseURL: "https://musical-education-db-sj.firebaseio.com",
    projectId: "musical-education-db-sj",
    storageBucket: "musical-education-db-sj.appspot.com",
    messagingSenderId: "1091945993717"
};

firebase.initializeApp(config);
var database = firebase.database();

//database.set({ "hello": "Dianna" });

var usersRef = database.ref("vocab");
usersRef.set({
    
        word: "Cresendo",
        defintion: "Gradually get louder"
})

var readRef = database.ref("vocab");

 readRef.once('value').then(function (snapshot) {
     
});
