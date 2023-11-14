const firebaseConfig = {
    apiKey: "AIzaSyCgRnbmUKPG84OFSRrIlHnoWHcCnQNS9Ek",
    authDomain: "teste93-97.firebaseapp.com",
    databaseURL:"https://teste93-97-default-rtdb.firebaseio.com",
    projectId: "teste93-97",
    storageBucket: "teste93-97.appspot.com",
    messagingSenderId: "199592495195",
    appId: "1:199592495195:web:6f8e0da06238ada2d0d77e" };

    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
        });

        document.getElementById("msg").value = "";
    }

    function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebaseMessageId = childKey;
        messageData = childData;

        console.log(firebaseMessageId);
        console.log(messageData);
        message = messageData['name'];
        like = messageData['message'];
        like = messageData['like'];
        nameWithTag = "<h4> "+ name +"<img class='user_tick' src+'tick.png'></h4>";
        messageWithTag = "<h4 class='mesage_h4'>" + message + "</h4>";
        like_button="<button class='btn btn-warning'id="firebaseMessageId+" value="like+"onclick='updateLike(this.id) '>";
        spanWithTag = "<span clss='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
       
        row = nameWithTag + messageWithTag +like_button + spanWithTag;
        document.getElementById("output").innerHTML += row;
    }})} 

    getData();

    function updateLike (messageId)
    {
        console.log("botão de like pressionado - " + messageId);
        buttonId = messageid;
        likes = document.getElementById(buttonId). value;
        updateLikes = Number(likes) + 1;
        console.log(updateLikes);
    
        firebase.database().ref(roomName).child(mesageid).update({ like : updateLikes
        })
    }

    function logout() {
        localStorage.removeItem("userName");
        localStorage.removeItem("roomName");
        window.location.replace("index.html");
        }