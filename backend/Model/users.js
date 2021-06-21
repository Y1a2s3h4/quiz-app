const mongoose = require("mongoose");
const Users = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});
module.exports = mongoose.model("quizCollection", Users);
/*The core Firebase JS SDK is always required and must be listed first
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>

/*TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAlxacxYFIMztgZ02jW8c_cXB-abHme8og",
    authDomain: "quiz-app-6a751.firebaseapp.com",
    projectId: "quiz-app-6a751",
    storageBucket: "quiz-app-6a751.appspot.com",
    messagingSenderId: "693509858718",
    appId: "1:693509858718:web:ac22dced37b050f07ee28f",
    measurementId: "G-YNBCJTN92V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>*/
