//creating a nested object representing a person and
const person = {
    firstName: "karthik",
    lastName: "K M",
    age: 18,
    address: {
        street: "6th cross",
        city: "Bangalore",
        state: "Karnataka",
        zipCode: "560021"
    },
    occupation: "Engineering Student"
};
//Accessing properties of the main object
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);

//Accessing properties of the nested object
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipCode);