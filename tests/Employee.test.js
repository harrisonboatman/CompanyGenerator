const Employee = require('../lib/Employee');

const newEmp = new Employee("Steve", 3421, "steve@me.com");

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should take name, id, and email to create an object", () => {
            expect(newEmp.name).toEqual("Steve");
            expect(newEmp.id).toEqual(3421);
            expect(newEmp.email).toEqual("steve@me.com")
        }
        )
    });

    describe("methods for getting name,id, email", () => {
        it("should test getname, getid, getemail, and getrole methods", () => {
            expect(newEmp.getName()).toEqual("Steve");
            expect(newEmp.getID()).toEqual(3421);
            expect(newEmp.getEmail()).toEqual("steve@me.com");
            expect(newEmp.getRole()).toEqual("Employee")
        }
        )
    });

    

    
});

