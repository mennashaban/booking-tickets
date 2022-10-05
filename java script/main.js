function validate(){
    var username1=document.getElementById("username");
    var password1=document.getElementById("password");
    if(username1.value=="user1" && password1.value=="111213")
    {
        alert("Login successful");
        window.open ("home.html","_blank");

    }
    else if(username1.value=="admin" && password1.value=="abc123")
    {
        alert("Login successful");
      window.open ("admin.html","_blank");
  

        
    }
    else{
        alert("Login failed");
}


}
function logout(){
    alert("are you sure you want to logout?");
    window.open ("login.html","_blank");
    window.close("home.html");
}