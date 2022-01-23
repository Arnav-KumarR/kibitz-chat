var firebaseConfig = {
  apiKey: "AIzaSyAZnfHpuNB95zSMpRF8HSKec0d5JJNzzN0",
  authDomain: "kibitz-660d0.firebaseapp.com",
  databaseURL: "https://kibitz-660d0-default-rtdb.firebaseio.com",
  projectId: "kibitz-660d0",
  storageBucket: "kibitz-660d0.appspot.com",
  messagingSenderId: "974241347555",
  appId: "1:974241347555:web:b31055d0c13e2ed20752d6",
  measurementId: "G-0FC7RD320L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kibitz_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kibitz_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    