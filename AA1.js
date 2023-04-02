function verify() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = "";
    
    if (username == "") {
        message += "Please enter a username.\n";
        console.log("Please enter a username .\n");
    }
    if (password == "") {
        message += "Please enter a password.\n";
        console.log("Please enter a password .\n");
        
    }
    
    if (message != "") { 
        alert(message);
        return false;
    }
    else {
        var confirmed = confirm("Are you sure you want to submit?");
        if (confirmed == true) {
            
            
            return true
            
        }
        else {
            return false;
        }
    }
}