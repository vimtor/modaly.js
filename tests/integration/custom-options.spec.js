describe('modal custom options', () => {
    before(() => {
        cy.visit('/');
        cy.wait(100);
    });

    const modal = '#modal-custom';
    const openTrigger = `[data-modaly-open='${modal}']`;
    const closeTrigger = '[data-modaly-close]';

    it('does not close by pressing the ESC key', () => {
        cy.get(openTrigger).click();
        cy.get('body').trigger('keyup', { key: 'Escape' });
        cy.get(modal).should('be.visible');
    });

    it('does not close by clicking the overlay', () => {
        cy.get(modal).click();
        cy.get(modal).should('be.visible');
    });

    it('closes by clicking the close trigger', () => {
        cy.get(modal)
            .children(closeTrigger)
            .click();

        cy.get('#modal').should('be.not.visible');
    });

    it('background color is red', () => {
        cy.get(modal)
            .before('background-color')
            .should('eq', 'rgb(255, 0, 0)');
    });

    it('opacity is 0.5', () => {
        cy.get(modal)
            .before('opacity')
            .should('eq', '0.5');
    });

    it('animation duration is 500ms', () => {
        cy.get(modal).should(($el) => {
            expect($el).to.have.css('transition-duration', '0.5s');
        });
    });

    it('animation mode is ease-out', () => {
        cy.get(modal).should(($el) => {
            expect($el).to.have.css('transition-timing-function', 'ease-out');
        });
    });
});
