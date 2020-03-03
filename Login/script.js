function checkForm() {
    
    document.getElementById("formErrors").style.display = "none";
    
    var ulList = document.getElementById("errDisplay");
       
    
    
    var fName = document.getElementById("fullName");
    var em = document.getElementById("email");
    var pass = document.getElementById("password");
    var Cpass = document.getElementById("passwordConfirm");
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    var low = /[a-z]/;
    var up = /[A-Z]/;
    var nums = /[0-9]/;
    
    var ulList = document.getElementById("errDisplay");
    
    if(fName.value == "") {
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("fullName").style.border = "2px solid red";
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Missing full name."));
        document.getElementById("errDisplay").append(li);
        
        
    }
    
    if (!reg.test(em.value)) {
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("email").style.border = "2px solid red";
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Invalid or missing email address."));
        document.getElementById("errDisplay").append(li);
        

    }
    
     if (pass.value.length < 10 || pass.value.length > 20) {
         
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("password").style.border = "2px solid red";
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Password must be between 10 and 20 characters."));
        document.getElementById("errDisplay").append(li);
         

     }
    
    if (!low.test(pass.value)){
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("password").style.border = "2px solid red";
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Password must contain at least one lowercase character."));
        document.getElementById("errDisplay").append(li);
 
    }
    
    if (!up.test(pass.value)) {
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("email").style.border = "2px solid red";
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Password must contain at least one uppercase character."));
        document.getElementById("errDisplay").append(li);
    }
    
    if(!nums.test(pass.value)) {
        
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("email").style.border = "2px solid red";
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Password must contain at least one digit."));
        document.getElementById("errDisplay").append(li);
        
    }
    
    if (pass.value !== Cpass.value) {
document.getElementById("formErrors").style.display = "block";
        document.getElementById("passwordConfirm").style.border = "2px solid red";
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Password and confirmation password don't match."));
        document.getElementById("errDisplay").append(li);
    
    }
    
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});