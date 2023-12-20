var element1 = document.getElementById('UlId'); 
function drop(){
    element1.classList.toggle('newClass');       //when i click on icon it will add this class name to ul And if it already there then it will remove
    // let f = confirm('are you 18');
    // if(f){
    //     alert('you are allowed')
    // }
    // else{
    //     alert('you are not allowed')
    // }
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


// ****** Toggle and classList
/* In JavaScript, classList is a property of DOM elements that represents a live collection of the
 class attributes of the element. The toggle method of classList is used to add or remove a class
 from an element. If the class is present, it will be removed; if it's absent, it will be added.
 */