// function login(event){

//     event.preventDefault();




//     var email = document.getElementById("email").value
//     console.log(email, "- email ")
//     var password = document.getElementById("password").value;
//     console.log(password, "- password")

//     if (!email || !password) {
//         return alert("All fields are is required")
//     }

//     var users = JSON.parse(localStorage.getItem("Users"));
//     console.log(users)

//     for(var i = 0; i < users.length; i++){
//         if(users[i].email == email && users[i].password == password )
//         {
//             document.getElementById("email").value = ''
//             document.getElementById("password").value = ''

//             window.location.href = "../../projects/nike/mainpage/nike.html"


//             return alert('Login successful')
//         }
//     }

//     return alert ('Please check your email & password')

// }


function login(event) {
    event.preventDefault();


    var email = document.getElementById("email").value
    console.log(email, "- email ")
    var password = document.getElementById("password").value;
    console.log(password, "- password")

    if (!email || !password) {
        return alert("All fields are is required")
    }

    var users = JSON.parse(localStorage.getItem('Users'));
    console.log(users)

    for(let i = 0; i<users.length; i++){
        if(users[i].email == email && users[i].password == password){
            var email = document.getElementById("email").value = ''
            var password = document.getElementById("password").value = '';

            window.location.href = "../../projects/nike/mainpage/nike.html"

            return alert('Login successful')
        }
    }

    return alert ('Please Check Your Email & Password')

}
