const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNum){
    super(nam, id, email);
    this.officeNum = officeNum;
}
getRole() {
    return "Manager"
}
}