function Register(event){
  
    event.preventDefault();


    
    
    var email = document.getElementById("email").value
    console.log(email, "- email ")
    var password = document.getElementById("password").value;
    console.log(password, "- password")

    if (!email || !password) {
        return alert("All fields are is required")
    }
    
    var users = JSON.parse(localStorage.getItem("Users"));
    console.log(users)

    for(var i = 0; i < users.length; i++){
        if(users[i].email == email && users[i].password == password )
        {
            document.getElementById("email").value = ''
            document.getElementById("password").value = ''

            window.location.href = "/Awdiz/projects/nike/mainpage/nike.html"

            return alert('Login successful')
        }
    }

    return alert ('Please check your email & password')
 
}
