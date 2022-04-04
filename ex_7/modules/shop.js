/*Class Shop*/

class Shop {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.items_array = [];
        if (this.name === '') this.name = 'Unnamed shop';
        if (this.type === '') this.type = 'No type';
    }
}

/* Shops collection */

let shopsCollection = [];

/* Add shop */

const addShop = (name, type) => {
    let newShop = new Shop(name, type);
    shopsCollection.push(newShop);
};

/* Delete shop */

const deleteShop = (name) => {
    shopsCollection = shopsCollection.filter(shop => shop.name !== name);
};

/* Find shop */

const findShop = (name) => {
    for (let i = 0; i < shopsCollection.length; i++) {
        if (shopsCollection[i].name === name) {
            return shopsCollection[i];
        }
    }
    return 0;
};

/* Update shop */

const updateShop = (oldName, newName, newType) => {
    let index = shopsCollection.indexOf(findShop(oldName));
    if (newName !== '' && newName !== undefined) shopsCollection[index].name = newName;
    if (newType !== '' && newType !== undefined) shopsCollection[index].type = newType;
};

/* Get shop list */

const getShopList = () => console.log(shopsCollection);

module.exports = {
    addShop,
    deleteShop,
    findShop,
    updateShop,
    getShopList
}

