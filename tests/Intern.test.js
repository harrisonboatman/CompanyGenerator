const Intern = require('../lib/Intern');

const newEmp = new Intern("Steve", 3421, "steve@me.com", "UTA");

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should take name, id, email, and school to create an object", () => {
            expect(newEmp.name).toEqual("Steve");
            expect(newEmp.id).toEqual(3421);
            expect(newEmp.email).toEqual("steve@me.com");
            expect(newEmp.school).toEqual("UTA");
        }
        )
    });

    describe("methods for getting the school", () => {
        it("should show the school name and role of the new employee", () => {
            expect(newEmp.getSchool()).toEqual("UTA");
            expect(newEmp.getRole()).toEqual("Intern");
            
        }
        )
    });

    

    
});
