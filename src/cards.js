const fs = require('fs');

const employeeCards = [];

const makeAllDivs = (newEmployee) => {
    const htmlCard = `<div class="card employee-card">
<div class="card-header bg-secondary text-white">
    <h2 class="card-title">${newEmployee.name}</h2>
    <h3 class="card-title"><i class="fas  mr-2"></i>${newEmployee.role}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">Employee ID #: ${newEmployee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${newEmployee.email}"></a></li>
    </ul>
</div>
</div>`

    employeeCards.push(htmlCard);
};

const makeHTML = () => {
    const team = employeeCards.join("");

    fs.writeFileSync('./dist/team.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-primary">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
    ${team}
                </div>
            </div>
        </div>
    </body>
    </html>`,
        (err) => { err ? console.log(err) : console.log('Success!') });

    console.log('Success!');
};

module.exports = { makeAllDivs, makeHTML }