var firebaseConfig = {
      apiKey: "AIzaSyAX_sDPrd_cqwSaxJVZCbgT66_Fx38GWk0",
      authDomain: "lets-chat-web-app-8e4dc.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-8e4dc-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-8e4dc",
      storageBucket: "lets-chat-web-app-8e4dc.appspot.com",
      messagingSenderId: "98495648067",
      appId: "1:98495648067:web:96cd7b64b040649ac69ff6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !"

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function Logout(){
      localStorage.removeItem("user_name");
      window.location="index.html";
      localStorage.removeItem("room_name");
}

function addRoom() {
      room_name = document.getElementById("roomName").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "LetsChat_page.html";
}