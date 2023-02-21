const Engineer = require('../lib/Engineer')

const newEmp = new Engineer("Steve", 3421, "steve@me.com", "stevegithub");


describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should take name, id, email, and github username to create an object", () => {
            expect(newEmp.name).toEqual("Steve");
            expect(newEmp.id).toEqual(3421);
            expect(newEmp.email).toEqual("steve@me.com");
            expect(newEmp.github).toEqual('stevegithub')
        }
        )
    });

    describe("method for getting Github", () => {
        it("should show the github username and role of the new employee", () => {
            expect(newEmp.getGithub()).toEqual("stevegithub");
            expect(newEmp.getRole()).toEqual("Engineer");
            
        }
        )
    });

    

    
});
