const firebaseConfig = {
      apiKey: "AIzaSyDt4Wqqf8iXWO5jbeWhts7cvL8lHJrG6QI",
      authDomain: "kwitter-7323b.firebaseapp.com",
      databaseURL: "https://kwitter-7323b-default-rtdb.firebaseio.com",
      projectId: "kwitter-7323b",
      storageBucket: "kwitter-7323b.appspot.com",
      messagingSenderId: "1024085694361",
      appId: "1:1024085694361:web:457db5bf79d72319a52508"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
