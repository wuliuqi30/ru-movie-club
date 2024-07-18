console.log("HELLOWORLD")

// JS node objects for the empty input bar, 
// the add item button
// and an unordered list

// when the user presses the button, the item goes into the list

// when the click button event happens (a listener on the button),


// add an event listener to the button

const button = document.querySelector("button");

const inputBar = document.querySelector("input");

const shoppingList = document.querySelector("ul");


button.addEventListener("click", addToList);

function addToList() {
    // and make an list item element
    const listItem = document.createElement("li");
    const spanItem = document.createElement("span");
    const button = document.createElement("button");

    button.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this? This action cannot be undone!")){
            button.parentNode.remove();
        }

        
    });

    listItem.appendChild(spanItem);
    listItem.appendChild(button);

    console.log(inputBar);
    // get the text from the input bar,
    if (inputBar.value.trim() === '') {
        return;
    } else {
        spanItem.textContent = inputBar.value;
    }
    inputBar.textContent = '';

    button.textContent = "Delete";

    shoppingList.appendChild(listItem);

    inputBar.focus();
    // text and a button for delete.and append that to the ul. 

}



// then delete the text inside the input bar.

// the delete button itself should have a event listener whose
// function is to delete its parent list item?