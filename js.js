const msg = +prompt('How old r u?', '');

const myDB = {
    age: msg,
    cars: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Whats ur car?', '');
const b = prompt('Which year', '');

myDB.cars[a] = b;

console.log(myDB);