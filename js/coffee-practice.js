//
// "use strict"
//
// function renderCoffee(coffee) {
//     let html = '<div class="row coffee-row">';
//     html += '<p class="column id" >' + coffee.id + '</>';
//     html += '<p class="column name">' + coffee.name + '</td>';
//     html += '<p class="column roast>' + coffee.roast + '</td>';
//     html += '</div>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     let html = '';
//     for(let i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     let selectedRoast = roastSelection.value;
//     let filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     .innerHTML = renderCoffees(filteredCoffees);
// }
//
//
//
//
//
// window.addEventListener('load', () => {
// let coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// let tbody = document.querySelector('#coffees');
// let submitButton = document.querySelector('#submit');
// let roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);
//
// // hiding ID
//
// // window.addEventListener('load',()=>{
// //     const id = document.querySelector('#id');
// //     id.classList.add('loading-hidden');
// //
// //     });
//
//
// window.addEventListener('load', () => {
//     const column = document.querySelector('.column-selector#id');
//     column.style.display = 'none';
// });
//
//
//
//     const coffeeColumn = document.getElementById('coffee-column');
//     const coffeeNameElements = document.querySelectorAll('.name');
//     const coffeeRoastElements = document.querySelectorAll('.roast');
//
//     // Function to display coffee data
//     function displayCoffeeData(coffee) {
//         coffeeColumn.textContent = coffee.id;
//         coffeeNameElements.forEach((element) => {
//             element.textContent = coffee.name;
//         });
//         coffeeRoastElements.forEach((element) => {
//             element.textContent = coffee.roast;
//         });
//     }
//
//     // Sort the coffee array based on name
//     coffees.sort((a, b) => a.name.localeCompare(b.name));
//
//     // Display coffee data for each coffee
//     coffees.forEach((coffee) => {
//         displayCoffeeData(coffee);
//     });
// });
"use strict"

function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td><p>' + coffee.name + '</p></td>';
    html += '<td><p>' + coffee.roast + '</p></td>';
    html += '</tr>';

    return html;
}


function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
