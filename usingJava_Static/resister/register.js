// function Register(event){
//     event.preventDefault()
    

//     var name = document.getElementById('name').value
//     console.log(name , '-name')
//     var email = document.getElementById('email').value
//     console.log(email , '-email')
//     var password = document.getElementById('password').value
//     console.log(password , '-password')


//     if(!name || !email || !password){
//         return alert ("All fields should be filled")
//     }


//     var userData = { name , email , password}
//     console.log(userData)

//     var users = JSON.parse(localStorage.getItem("Users")) || [];


//     users.push(userData)


//     localStorage.setItem("Users", JSON.stringify(users))

//     document.getElementById('name').value = " ";

//     document.getElementById('email').value = " "; 

//     document.getElementById('password').value = " ";

//     // localStorage.setItem('devesh' , JSON.stringify(userData))

//     alert("Register Successfull.")

//     window.location.href = './../login/login.html'
    
// }

function Register(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userdata = {name , email , password}
    console.log(userdata);

    if(!name || !email || !password){
        return alert('fill all feilds')
    }

    const userDataArr = JSON.parse(localStorage.getItem('Users')) || [];
    console.log(userDataArr)

    userDataArr.push(userdata);

    localStorage.setItem('Users',JSON.stringify(userDataArr))

    ocument.getElementById('name').value = " ";

    document.getElementById('email').value = " "; 

    document.getElementById('password').value = " ";

    alert('Registration SuccessFull')

    window.location.href = './../login/login.html'

}