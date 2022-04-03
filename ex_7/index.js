const shop = require('./modules/shop');
const item = require('./modules/item');
const storage = require('./modules/storage');


const itemToShop = (nameOfShop, nameOfItem, priceOfItem) => {
    const someShop = shop.findShop(nameOfShop);
    item.addItem(nameOfItem, priceOfItem);
    const someItem = item.findItem(nameOfItem);
    someShop.items_array.push(someItem);
};

const itemToStorage = (numberOfStorage, nameOfItem, priceOfItem) => {
    const someStorage = storage.findStorage(numberOfStorage);
    item.addItem(nameOfItem, priceOfItem);
    const someItem = item.findItem(nameOfItem);
    someStorage.items_array.push(someItem);
};

const itemFromStorrageToStorrage = (storageNum1, nameOfItem, storageNum2) => {
    const storage1 = storage.findStorage(storageNum1);
    const storage2 = storage.findStorage(storageNum2);
    const someItem = item.findItem(nameOfItem);
    storage2.items_array.push(someItem);
    storage1.items_array = storage1.items_array.filter(deletedItem => deletedItem !== someItem);
};

const itemFromStorrageToShop = (storageNum, nameOfItem, nameOfShop) => {
    const someStorage = storage.findStorage(storageNum);
    const someShop = shop.findShop(nameOfShop);
    const someItem = item.findItem(nameOfItem);
    someShop.items_array.push(someItem);
    someStorage.items_array = someStorage.items_array.filter(deletedItem => deletedItem !== someItem);
};

const itemFromShopToStorrage = (nameOfShop, nameOfItem, storageNum) => {
    const someStorage = storage.findStorage(storageNum);
    const someShop = shop.findShop(nameOfShop);
    const someItem = item.findItem(nameOfItem);
    someStorage.items_array.push(someItem);
    someShop.items_array = someShop.items_array.filter(deletedItem => deletedItem !== someItem);
};

shop.addShop('Ibis', 'магазин зброї');
shop.addShop('Stvol', 'магазин зброї');

shop.getShopList();


storage.addStorage('Великий')
storage.addStorage('Середній')

storage.getStorageList()


itemToStorage(1, 'АК-74', '30 000 грн')
itemToStorage(2, 'AR-15', '40 000 грн')

storage.getStorageList()

storrage1 = storage.findStorage(1)
console.log(storrage1.items_array);

itemFromStorrageToStorrage(1, 'АК-74', 2)

storage.getStorageList()