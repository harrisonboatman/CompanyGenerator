const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const { makeAllDivs, makeHTML } = require("./src/cards");
var newEmployee = []


const questions = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',

        ]
    },
    {
        type:'input',
        name:'room',
        message: 'What is your office number?',
        when: function(answers) {
            return answers.role === 'Manager'
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github Username?',
        when: function(answers) {
            return answers.role === 'Engineer'
        }
    },
    {
        type: 'input',
        name:'school',
        message: 'What school are you currently attending?',
        when:function(answers) {
            return answers.role === 'Intern'
        }
    },
    {
        type: 'confirm',
        name: 'redo',
        message: 'Do you want to add more employees?',
        default: true
        
    }
])
.then((data) => {
    newEmployee.name = data.name;
    newEmployee.id = data.id;
    newEmployee.role = data.role;
    newEmployee.email = data.email;
    newEmployee.github = data.github;
    newEmployee.school = data.school;
    newEmployee.room = data.room;
    if(!newEmployee.github) {
        newEmployee.github = 'N/A';
    }
    if(!newEmployee.school) {
        newEmployee.school = 'N/A';
    }
    if(!newEmployee.room) {
        newEmployee.room = 'N/A'
    }
    makeAllDivs(newEmployee);

    if(data.redo) {
        questions();
    }else {
        console.log("You're all done!")
        makeHTML();
    }
})

};

questions();