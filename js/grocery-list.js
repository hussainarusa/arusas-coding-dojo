// // ****** SELECT ITEMS ******* //
// const alert = document.querySelector('.alert')
// const form = document.querySelector('.grocery-form')
// const grocery = document.getElementById('.grocery')
// const submitBtn = document.querySelector('.submit-btn')
// const container = document.querySelector('.grocery-container')
// const list = document.querySelector('.grocery-list')
// const clearBtn = document.querySelector('.clear-btn')
//
// // edit option
// let editElement;
// let editFlag = false;
// let editID = "";
// // ****** EVENT LISTENERS ******* //
//
// //submit form
// form.addEventListener("submit", addItem);
//
// // ****** FUNCTIONS ******* //
//
// function addItem(e) {
//     e.preventDefault();
//     const value = grocery.value;
//     if(!value){
//         console.log(('value is falsy'));
//     }
//     const id = new Date().getTime().toString();
//     if (value && !editFlag) {
//         console.log(('add item to the list'));
//     }
//     else if (value && editFlag ) {
//         console.log('editing')
//     }
//     else{
//        displayAlert('please enter a value, danger');
//     }
// }
//
// //display alert
// setTimeout(function() {
//     function displayAlert(text, action) {
//         // let alertElement = document.getElementById("alert");
//         alert.textContent = text;
//         alert.classList.add(`alert-${action}`)}})
//
//     // // Call the displayAlert function here with the desired arguments
//     //     displayAlert("Hello, world!", "success");
//     // }, 2000);
//
//  //remove alert
//     setTimeout(function(text,action){
//         alert.textContent = '';
//         alert.classList.remove(`alert-${action}`);
//     }, 1000)
//
//
// // ****** LOCAL STORAGE ******* //
//
// // ****** SETUP ITEMS ******* //


let glist = {
    // (A) INITIALIZE GROCERY LIST
    items : [],   // current grocery list
    hqty : null,  // html add quantity field
    hitem : null, // html add item field
    hlist : null, // html <div> grocery list
    init : () => {
        // (A1) GET HTML ELEMENTS
        glist.hqty = document.getElementById("gro-qty");
        glist.hitem = document.getElementById("gro-item");
        glist.hlist = document.getElementById("gro-list");

        // (A2) ENABLE FORM
        glist.hqty.disabled = false;
        glist.hitem.disabled = false;
        document.getElementById("gro-add").disabled = false;
        document.getElementById("gro-form").onsubmit = glist.add;

        // (A3) RESTORE PREVIOUS GROCERY LIST
        if (localStorage.items === undefined) { localStorage.items = "[]"; }
        glist.items = JSON.parse(localStorage.items);

        // (A4) DRAW HTML GROCERY LIST
        glist.draw();
    },

    // (B) SAVE GROCERY LIST INTO LOCAL STORAGE
    save : () => {
        if (localStorage.items === undefined) { localStorage.items = "[]"; }
        localStorage.items = JSON.stringify(glist.items);
    },

    // (C) ADD NEW ITEM TO THE LIST
    add : evt => {
        // (C1) ADD NEW ITEM TO LIST
        glist.items.push({
            qty  : glist.hqty.value,  // item quantity
            name : glist.hitem.value, // item name
            got  : false              // item accquired
        });
        glist.save();

        // (C2) RESET HTML ADD FORM
        glist.hqty.value = 1;
        glist.hitem.value = "";

        // (C3) REDRAW HTML GROCERY LIST
        glist.draw();
        return false;
    },

    // (D) DELETE SELECTED ITEM
    delete : id => { if (confirm("Remove this item?")) {
        glist.items.splice(id, 1);
        glist.save();
        glist.draw();
    }},

    // (E) TOGGLE ITEM BETWEEN "ACCQUIRED" & "NOT YET"
    toggle : id => {
        glist.items[id].got = !glist.items[id].got;
        glist.save();
        glist.draw();
    },

    // (F) DRAW THE HTML GROCERY LIST
    draw : () => {
        // (F1) RESET HTML LIST
        glist.hlist.innerHTML = "";

        // (F2) NO ITEMS
        if (glist.items.length === 0) {
            glist.hlist.innerHTML = "<div class='item-row item-name'>No items found.</div>";
        }

        // (F3) DRAW ITEMS
        else { for (let i in glist.items) {
            // (F3-1) ITEM ROW
            let row = document.createElement("div");
            row.className = glist.items[i].got ? "item-row yes" : "item-row no";
            glist.hlist.appendChild(row);

            // (F3-2) DELETE BUTTON
            let del = document.createElement("button");
            del.className = "item-del material-icons";
            del.innerHTML = "delete";
            del.onclick = () => glist.delete(i);
            row.appendChild(del);

            // (F3-3) ITEM QUANTITY & NAME
            let name = document.createElement("div");
            name.innerHTML = `${glist.items[i].qty} X ${glist.items[i].name}`;
            name.className = "item-name";
            row.appendChild(name);

            // (F3-4) ITEM ACCQUIRED
            let ok = document.createElement("button");
            ok.className = "item-ok material-icons";
            ok.innerHTML = glist.items[i].got ? "done" : "clear";
            ok.onclick = () => glist.toggle(i);
            row.appendChild(ok);
        }}
    }
};
window.addEventListener("load", glist.init);































