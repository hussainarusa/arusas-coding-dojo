
function hello (){
    let i= "hello"
}
console.log(hello)

function changeColor() {

    let selected = document.getElementById('first');

    selected.style.color = 'red';

}


document.addEventListener('click', function(event) {
    if (!event.target.matches('p')) {return;}
    event.target.style.color = 'red';
});

console.log(changeColor)