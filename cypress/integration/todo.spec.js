describe('Todo Application', () => {
    before(() => {
        cy.request('DELETE', '/api/todos/delete');
        cy.visit('/');
    });

    it('Visits the Todo App', () => {
        cy.contains('h5', 'Todo application');
        cy.get('button')
            .should('be.visible')
            .should('have.length', 4);
        cy.createTodo(`    ${'TODO_ITEM_ONE'}    `);
    });

    // it('No Todos', () => {
    //     cy.get('.list-group li').should('not.exist');
    // });

    // it('adds 1 todos', () => {
    //     cy.get('input[type="text"]')
    //         .type('LEARN TESTING')
    //         .type('{enter}');
    //     cy.get('input[type="text"]')
    //         .type('BE COOL')
    //         .type('{enter}');
    //     cy.get('input[type="text"]')
    //         .type('HAVE FUN')
    //         .type('{enter}');
    // });

    // it('Now it should show todos lists item has been added', () => {
    //     cy.get('.list-group li').should('have.length', 3);
    // });

    // context('New Todo', () => {
    //     it('should allow me to add todo items', () => {
    //         cy.get('.form-control')
    //             .type('TODO_ITEM_ONE')
    //             .type('{enter}');
    //         cy.get('.list-group > :nth-child(4)')
    //             .find('label')
    //             .should('contain', 'TODO_ITEM_ONE');
    //         cy.get('.form-control')
    //             .type('TODO_ITEM_TWO')
    //             .type('{enter}');
    //         cy.get('.list-group > :nth-child(5)')
    //             .find('label')
    //             .should('contain', 'TODO_ITEM_TWO');
    //     });

    //     it('should clear text input field when an item is added', () => {
    //         cy.get('.form-control')
    //             .type('TODO_ITEM')
    //             .type('{enter}');
    //         cy.get('.form-control').should('have.text', '');
    //     });

    //     it('should append new items to the end of the list', () => {
    //         cy.get('.form-control')
    //             .type('NEW_ITEM')
    //             .type('{enter}');
    //         cy.get('.list-group li')
    //             .eq(6)
    //             .find('label')
    //             .should('contain', 'NEW_ITEM');
    //     });
    // });

    // context('Mark All as Completed', () => {
    //     it('should allow me to mark all as completed', () => {
    //         cy.get('#select-all').check({ force: true });
    //     });
    //     it('All of the tasks should be now completed', () => {
    //         cy.get(
    //             ':nth-child(1) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(2) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(3) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(4) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(5) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(6) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(7) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.class', 'text-danger');
    //     });
    // });
    // context('Mark all as Active', () => {
    //     it('Should allow me to mark all the comple state as uncompleted', () => {
    //         cy.get('#select-all').uncheck({ force: true });
    //     });
    //     it('All of the tasks should be now again active', () => {
    //         cy.get(
    //             ':nth-child(1) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.not.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(2) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.not.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(3) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.not.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(4) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.not.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(5) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.not.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(6) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.not.class', 'text-danger');
    //         cy.get(
    //             ':nth-child(7) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.not.class', 'text-danger');
    //     });
    //     it('"Select-all" checkbox should be now unchecked', () => {
    //         cy.get('#select-all').should('not.be.checked');
    //     });
    // });
    // context('Todos', () => {
    //     it('should allow me to complete a particular todo', () => {
    //         cy.get('#0').check({ force: true });
    //     });
    //     it('particular task should now be completed', () => {
    //         cy.get(
    //             ':nth-child(1) > .custom-control > .custom-control-label > .text-danger'
    //         ).should('have.class', 'text-danger');
    //     });
    //     it('Now Active that particular task', () => {
    //         cy.get('#0').uncheck({ force: true });
    //     });
    // });
    // context('Remaining items counter', () => {
    //     it('should display the number of active todos left', () => {
    //         cy.get('.form-control')
    //             .type('NEWW_TODOO')
    //             .type('{enter}');
    //         cy.get('.col-md-4').should('contain', '8 item(s) left');
    //     });
    // });
    // context('Buttons featured below in the TODO application', () => {
    //     it('All Button should display all todos left', () => {
    //         cy.get('.active').click();
    //         cy.get('.list-group li')
    //             .eq(0)
    //             .find('label')
    //             .should('be.visible');
    //         cy.get('.list-group li')
    //             .eq(1)
    //             .find('label')
    //             .should('be.visible');
    //         cy.get('.list-group li')
    //             .eq(2)
    //             .find('label')
    //             .should('be.visible');
    //         cy.get('.list-group li')
    //             .eq(3)
    //             .find('label')
    //             .should('be.visible');
    //         cy.get('.list-group li')
    //             .eq(4)
    //             .find('label')
    //             .should('be.visible');
    //         cy.get('.list-group li')
    //             .eq(5)
    //             .find('label')
    //             .should('be.visible');
    //         cy.get('.list-group li')
    //             .eq(6)
    //             .find('label')
    //             .should('be.visible');
    //         cy.get('.list-group li')
    //             .eq(7)
    //             .find('label')
    //             .should('be.visible');
    //     });
    //     it('Active Button should display active todos left', () => {
    //         cy.get('#0').check({ force: true });
    //         cy.get('#1').check({ force: true });
    //         cy.get('#2').check({ force: true });
    //         cy.get('#3').check({ force: true });
    //         cy.get('.btn-group > :nth-child(2)').click({ force: true });
    //         cy.get('.list-group li')
    //             .eq(0)
    //             .find('label')
    //             .should('contain', 'TODO_ITEM_TWO');
    //         cy.get('.list-group li')
    //             .eq(1)
    //             .find('label')
    //             .should('contain', 'TODO_ITEM');
    //         cy.get('.list-group li')
    //             .eq(2)
    //             .find('label')
    //             .should('contain', 'NEW_ITEM');
    //         cy.get('.list-group li')
    //             .eq(3)
    //             .find('label')
    //             .should('contain', 'NEWW_TODOO');
    //     });

    //     it('Completed Button should display completed todos', () => {
    //         cy.get('.btn-group > :nth-child(3)').click({ force: true });
    //         cy.get('.list-group li')
    //             .eq(0)
    //             .find('label')
    //             .should('contain', 'LEARN TESTING');
    //         cy.get('.list-group li')
    //             .eq(1)
    //             .find('label')
    //             .should('contain', 'BE COOL');
    //         cy.get('.list-group li')
    //             .eq(2)
    //             .find('label')
    //             .should('contain', 'HAVE FUN');
    //         cy.get('.list-group li')
    //             .eq(3)
    //             .find('label')
    //             .should('contain', 'TODO_ITEM_ONE');
    //     });
    //     it('Clear Completed Button should display only active todos', () => {
    //         cy.get('.btn-group > :nth-child(4)').click();
    //         cy.get('.btn-group > :nth-child(1)').click();
    //         cy.get('.list-group li')
    //             .eq(0)
    //             .find('label')
    //             .should('contain', 'TODO_ITEM_TWO');
    //         cy.get('.list-group li')
    //             .eq(1)
    //             .find('label')
    //             .should('contain', 'TODO_ITEM');
    //         cy.get('.list-group li')
    //             .eq(2)
    //             .find('label')
    //             .should('contain', 'NEW_ITEM');
    //         cy.get('.list-group li')
    //             .eq(3)
    //             .find('label')
    //             .should('contain', 'NEWW_TODOO');
    //     });
    //     it('Delete button should remove that particular task', () => {
    //         cy.get('.list-group > :nth-child(3) > .btn > .fa').click();
    //         cy.get('.col-md-4').should('contain', '3 item(s) left');
    //     });
    // });
});
