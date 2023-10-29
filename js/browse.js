//modal functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('myModal');
    const openModalButtons = document.querySelectorAll('.openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const confirmButton = document.getElementById('submit-foster-btn');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listeners for opening and closing the modal
    for (const button of openModalButtons) {
        button.addEventListener('click', openModal);
    }

    closeModalButton.addEventListener('click', closeModal);

    confirmButton.addEventListener('click', () => {
        // Add your code to handle the submission here
        alert('You confirmed!');
        closeModal();
    });
});

// retrieving data
// defining the URL of the API endpoint
// Define the URL of the JSON data source
const apiUrl = 'http://localhost:8080/api/data';
const apiKey = "d11do1NACHCsTPCWzzCdZNL157KDBhpBN3C3OY8TKSdqON1Une";

//
// // Reference the <ul> element where i display the data
const dataList = document.getElementById('data-list');
//
// Fetch the JSON data
fetch(apiUrl,{
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
})

    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        //  iterate through it
        // and add each item to the list.
        data.forEach(animal => {
            const listItem = document.createElement('li');
            listItem.textContent = animal.name; // Assuming 'name' is a property in your JSON data
            dataList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
