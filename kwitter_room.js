import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ0jF_VgGRNo18iq16mD5aRqpT22QAgec",
  authDomain: "kwitter-14c7b.firebaseapp.com",
  databaseURL: "https://kwitter-14c7b-default-rtdb.firebaseio.com",
  projectId: "kwitter-14c7b",
  storageBucket: "kwitter-14c7b.appspot.com",
  messagingSenderId: "562150437481",
  appId: "1:562150437481:web:af9a03a26b33027dfd68f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAZ0jF_VgGRNo18iq16mD5aRqpT22QAgec",
      authDomain: "kwitter-14c7b.firebaseapp.com",
      databaseURL: "https://kwitter-14c7b-default-rtdb.firebaseio.com",
      projectId: "kwitter-14c7b",
      storageBucket: "kwitter-14c7b.appspot.com",
      messagingSenderId: "562150437481",
      appId: "1:562150437481:web:af9a03a26b33027dfd68f8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name+ "!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
        purpose:"addin room name"
     });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+ Room_names);
row= "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
