/* Class Storage */

class Storage {
    constructor(number, type) {
        this.number = number;
        this.type = type;
        this.items_array = [];
        if (this.number === '') this.number = 'Unnamed storage';
        if (this.type === '') this.type = 'No type';
    }
}

/* Storages collection */

let storageCollection = [];

/* Add storage */

let storageNum = 1;

const addStorage = (type) => {
    let newStorage = new Storage(storageNum, type);
    storageCollection.push(newStorage);
    storageNum++;
};

/* Delete storage */

const deleteStorage = (number) => {
    storageCollection = storageCollection.filter(storage => storage.number !== number);
};

/* Find storage */

const findStorage = (number) => storageCollection[+number - 1] || 0;

/* Update storage */

const updateStorage = (number, nevType) => {
    if (nevType !== '') storageCollection[+number - 1].type = nevType;
};

/* Get shop list */

const getStorageList = () => console.log(storageCollection);

module.exports = {
    addStorage,
    deleteStorage,
    findStorage,
    updateStorage,
    getStorageList
}

