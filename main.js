
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { GoogleAuthProvider , getAuth, signInWithPopup, FacebookAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
 

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app)
  auth.LanguageCode = 'en';
  const loginWithGoogle = document.getElementById("google-login-button");
  loginWithGoogle.addEventListener('click', function() {

    signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user.displayName);
    console.log(user.email);


  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  })

const user = auth.currentUser


//facebook logic

const providerFacebook = new FacebookAuthProvider();
const loginWithFacebook = document.getElementById("facebook-login-button");
loginWithFacebook.addEventListener('click', function() {

  signInWithPopup(auth, providerFacebook)
.then((result) => {

  const credential = FacebookAuthProvider.credentialFromResult(result);
  const user = result.user;
  console.log(user.displayName);
  console.log(user.email);


}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});
})




