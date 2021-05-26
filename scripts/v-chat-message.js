var firebaseConfig = {
    apiKey: "AIzaSyDmSXIc5lldojWaoJLoDo9jtQGp1eeOb6w",
    authDomain: "face-chat-database.firebaseapp.com",
    databaseURL: "https://face-chat-database-default-rtdb.firebaseio.com",
    projectId: "face-chat-database",
    storageBucket: "face-chat-database.appspot.com",
    messagingSenderId: "23577649871",
    appId: "1:23577649871:web:1c12067e198bafdf98cdba"
};

firebase.initializeApp(firebaseConfig);

user_name = sessionStorage.getItem("user_name");
room_name = sessionStorage.getItem("user_room");

document.getElementById("roomName").innerHTML = room_name + " - Send this room name to start chat";

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

function goTop() {
    window.scrollTo(0, 0);
}

function logout() {
    window.location = "./user.html";
}