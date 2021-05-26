var firebaseConfig = {
    apiKey: "AIzaSyAPisP71a7zIlHL2hmb7jjjJwoMStruNEU",
    authDomain: "searcherlook-database.firebaseapp.com",
    databaseURL: "https://searcherlook-database-default-rtdb.firebaseio.com",
    projectId: "searcherlook-database",
    storageBucket: "searcherlook-database.appspot.com",
    messagingSenderId: "474313871406",
    appId: "1:474313871406:web:aeae629dc67d9acbd6cfbf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

document.getElementById("room").innerHTML = "Chat Room Name: " + room_name;

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg
    });

    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;

                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                row = "<h4><img src='../images/avatar.png' class='user_tick'/> " + name + "</h4><h4 class='message_h4'>" + message + "</h4><hr>";
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}

getData();

function back() {
    window.location = "./user.html";
}