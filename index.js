const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = () => 
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
]);
    
