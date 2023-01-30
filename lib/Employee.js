const { getSystemErrorName } = require("util");

class Employee {
    constructor(nam, id, email){
    this.nam = nam;
    this.id = id;
    this.email = email;

  
} 
 getName()  {
    return this.name
    }

getID() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return "Employee";
}
}

module.exports = Employee