var element1 = document.getElementById('UlId'); 
function drop(){
    element1.classList.toggle('newClass');
    let f = confirm('are you 18');
    if(f){
        alert('you are allowed')
    }
    else{
        alert('you are not allowed')
    }
}
var s = document.getElementById('f');
function hekko(){
    s.innerHTML = '<h1> hello its hekko function <h1>'
}





// // for in function for objects
// var obj = { name: 'devesh', age: '20', salary: '100000000' };
// for (key in obj) {
//     console.log('The ' + key + 'of employee is ' + obj[key]);
// }
