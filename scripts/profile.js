function logout() {
    window.location = "./user.html";
}

user_name = localStorage.getItem("username");
chat_room = localStorage.getItem("roomname");

document.getElementById("user_name").innerHTML = user_name + "<img src='/images/verified.png' title='Verified' class='user_tick'/>";
document.getElementById("given_name").innerHTML = '@' + user_name.toLowerCase().concat() + '_';
document.getElementById("name").innerHTML = user_name;
document.getElementById("room_name").innerHTML = chat_room;