const Manager = require('../lib/Manager');

const newEmp = new Manager("Steve", 3421, "steve@me.com", 754);

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should take name, id, email, and office number to create an object", () => {
            expect(newEmp.name).toEqual("Steve");
            expect(newEmp.id).toEqual(3421);
            expect(newEmp.email).toEqual("steve@me.com");
            expect(newEmp.officeNum).toEqual(754);
        }
        )
    });

    describe("methods for getting the role of the new employee", () => {
        it("should show the role of the new employee", () => {
            expect(newEmp.getRole()).toEqual("Manager");
            
        }
        )
    });

    

    
});