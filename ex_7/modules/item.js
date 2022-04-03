/* class item */

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        if (this.name === undefined) this.name = 'Unnamed item';
        if (this.price === undefined) this.price = 'For free';
    }
}

let itemsArray = [];

/* Add items */

const addItem = (name, price) => {
    let item = new Item(name, price);
    itemsArray.push(item);
};

/* Delete items */

const deleteItem = (name) => itemsArray = itemsArray.filter(item => item.name !== name);

/* Find items */

const findItem = (name) => {
    for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].name === name) {
            return itemsArray[i];
        }
    }
    return 0;
};

/* Update item */

const updateItems = (oldName, newName, newPrice) => {
    let index = itemsArray.indexOf(findItem(oldName));
    if (newName !== '') itemsArray[index].name = newName;
    if (newPrice !== '') itemsArray[index].price = newPrice;
};

/* Get all items */

const getItemsList = () => console.log(itemsArray);


module.exports = {
    addItem,
    deleteItem,
    findItem,
    updateItems,
    getItemsList
};
