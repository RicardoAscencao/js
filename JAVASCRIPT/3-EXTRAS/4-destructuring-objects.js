
let obj = {
    name: 'Nuno',
    lasName: 'Ascenção',
    address: {
        street: 'Rua Augusta',
        city: 'Lisboa',
    }
};

console.log(obj.address.city);

let {name, lasName, address:{street,city}} = obj;
console.log(name);
//console.log(address.city);
console.log(city);

let {username, address:{geo:{lat,lng}}} = obj2;
console.log(lat);


