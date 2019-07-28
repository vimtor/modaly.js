describe('modal user interface default features', () => {
    before(() => {
        cy.visit('/');
        cy.wait(500);
    });

    it('is invisible at the start', () => {
        cy.get('#modal').should('be.not.visible');
    });

    it('is visible after clicking the button', () => {
        cy.get('[data-modaly-open]').click();
        cy.get('#modal').should('be.visible');
    });

    it('is invisible again after clicking the close button', () => {
        cy.get('[data-modaly-close]').click();
        cy.get('#modal').should('be.not.visible');
    });
});
