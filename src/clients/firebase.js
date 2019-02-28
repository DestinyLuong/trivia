import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyADAYC7lX5QVEspv8BUeV2uDqrFle8yQpk",
  authDomain: "studio-trivia-db.firebaseapp.com",
  databaseURL: "https://studio-trivia-db.firebaseio.com",
  projectId: "studio-trivia-db",
  storageBucket: "studio-trivia-db.appspot.com",
  messagingSenderId: "736024037811"
});
export function getQuestions(cb) {
  firebase.database(app).ref('/questions').on('value', (snapshot) => {
    let questions = Object.values(snapshot.val());
    cb(questions);
  });
}