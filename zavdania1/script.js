let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',

    showData(){
        console.log(this.firstName,this.secondName);
    }
        
}
let newPerson = {
    firstName: 'Petro',
    secondName: 'Petriv',

    showData(){
        console.log(this.firstName,this.secondName);
    }
        
}

person.showData();
newPerson.showData();