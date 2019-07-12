// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// Cypress.Commands.add('createTodo', function(todo) {
//     let cmd = Cypress.log({
//         name: 'create todo',
//         message: todo,
//         consoleProps() {
//             return {
//                 'Inserted Todo': todo
//             };
//         }
//     });

//     // create the todo
//     cy.get('.form-control', { log: false }).type(`${todo}{enter}`, {
//         log: false
//     });

//     // now go find the actual todo
//     // in the todo list so we can
//     // easily alias this in our tests
//     // and set the $el so its highlighted
//     cy.get('.list-group', { log: false })
//         .contains('li', todo.trim(), { log: false })
//         .then(function($li) {
//             // set the $el for the command so
//             // it highlights when we hover over
//             // our command
//             cmd.set({ $el: $li })
//                 .snapshot()
//                 .end();
//         });
// });
Cypress.Commands.add('createTodo', function(todo) {
    let cmd = Cypress.log({
        name: 'create todo',
        message: todo,
        consoleProps() {
            return {
                'Inserted Todo': todo
            };
        }
    });

    // create the todo
    cy.get('.form-control')
        .type(todo)
        .type('{enter}');
    //`${todo}{enter}`);

    // now go find the actual todo
    // in the todo list so we can
    // easily alias this in our tests
    // and set the $el so its highlighted
    cy.get('.list-group')
        .contains('li', todo.trim())
        .then(function($li) {
            // set the $el for the command so
            // it highlights when we hover over
            // our command
            cmd.set({ $el: $li })
                .snapshot()
                .end();
        });
});
