describe('modal default options', () => {
    before(() => {
        cy.visit('/');
        cy.wait(500);
    });

    it('closes by pressing the ESC key', () => {
        cy.get('[data-modaly-open]').click();
        cy.document().trigger('keyup', { keyCode: 27, which: 27 });
        cy.get('#modal').should('be.not.visible');
    });
});
