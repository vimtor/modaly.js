describe('modal user interface default features', () => {
    before(() => {
        cy.visit('/');
        cy.wait(100);
    });

    const modal = '#modal';
    const openTrigger = `[data-modaly-open='${modal}']`;
    const closeTrigger = '[data-modaly-close]';

    it('is invisible at the start', () => {
        cy.get(modal).should('be.not.visible');
    });

    it('is visible after clicking the button', () => {
        cy.get(openTrigger).click();
        cy.get('#modal').should('be.visible');
    });

    it('is invisible again after clicking the close button', () => {
        cy.get(modal)
            .children(closeTrigger)
            .click();

        cy.get('#modal').should('be.not.visible');
    });
});
