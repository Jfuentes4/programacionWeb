var person = {
    firstname: 'Jhon',
    lastname: 'Doe',
    greet: function () {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
};

person.greet();
console.log(person['firstname']);
