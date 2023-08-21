let a = {};

function getA() { return a};

function addItem(key, value) {
    a[key] = value;
};

function removeItem(key) {
    delete a[key];
};

export {getA, addItem, removeItem};