describe('modal default options', () => {
    before(() => {
        cy.visit('/');
        cy.wait(500);
    });

    it('closes by pressing the ESC key', () => {
        cy.get('[data-modaly-open]').click();
        cy.get('body').trigger('keyup', { key: 'Escape' });
        cy.get('#modal').should('be.not.visible');
    });

    it('closes by clicking the overlay', () => {
        cy.get('[data-modaly-open]').click();
        cy.get('#modal').click();
        cy.get('#modal').should('be.not.visible');
    });
});
