let shoppingItems = []; //empty list for all shopping items

const itemNameInput = document.querySelector("#item-name"); //the item name box
const itemQuantityInput = document.querySelector("#item-quantity");  //the quantity box
const addItemButton = document.querySelector("#add-item-btn");    // add item button
const clearAllButton = document.querySelector("#clear-all-btn");    // clear all button    
const shoppingList = document.querySelector("#shopping-list");      //the <ul> list
const itemCount = document.querySelector("#item-count");            //total item text

//function addItem()
function addItem(name, quantity) {
    let item = {
        name: name,
        quantity: quantity
    };

    shoppingItems.push(item);
}

//function renderShoppingList
function renderShoppingList() {
    shoppingList.innerHTML = "";

    for (let i = 0; i< shoppingItems.length; i++) {
        let item = shoppingItems[i];
        
        let listItem = document.createElement("li");

        let itemText = document.createElement("span");
        itemText.textContent = `${item.name} x ${item.quantity}`

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            shoppingItems.splice(i, 1);
            renderShoppingList();
        });

        listItem.appendChild(itemText);
        listItem.appendChild(deleteButton);

        shoppingList.appendChild(listItem);
    }

    let totalQuantity = calculateTotalQuantity();
    itemCount.textContent = `Total quantity: ${totalQuantity}`;
}

//connect Add Item button
addItemButton.addEventListener("click", function() {
    let name = itemNameInput.value.trim();
    let quantity = Number(itemQuantityInput.value);

    //add validation | If name is empty OR quantity is 0 or below, show alert and stop.
    if (name === "" || quantity <= 0) {
        alert("Please enter a valid item name and quantity");
        return;
    }

    addItem(name, quantity);
    renderShoppingList();

    itemNameInput.value = "";
    itemQuantityInput.value = "";
});

//add clear all button
clearAllButton.addEventListener("click", function() {
    shoppingItems = [];     //reset the list back to empty
    renderShoppingList();
});

//add CalculateTotalQuantity()
function calculateTotalQuantity() {
    let totalQuantity = 0;

    for (let item of shoppingItems) {
        let totalQuantity = 0;

        for (let item of shoppingItems) {
            totalQuantity += item.quantity;
        }
        return totalQuantity;
    }
}