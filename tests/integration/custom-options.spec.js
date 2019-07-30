/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal custom options', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', {
                escape: false,
                overlay: false,
                background: 'red',
                opacity: 0.5,
                duration: 500,
                animation: 'ease-out',
                document: contentWindow.document,
            });
        });
    });

    it('does not close by pressing the ESC key', () => {
        cy.get("[data-modaly-open='#modal']").click();
        cy.document().trigger('keyup', { key: 'Escape' });

        cy.get('#modal').should('be.visible');
    });

    it('does not close by clicking the overlay', () => {
        cy.get('#modal').click();

        cy.get('#modal').should('be.visible');
    });

    it('closes by clicking the close trigger', () => {
        cy.get('#modal')
            .children('[data-modaly-close]')
            .click();

        cy.get('#modal').should('be.not.visible');
    });

    it('background color is red', () => {
        cy.get('#modal')
            .before('background-color')
            .should('eq', 'rgb(255, 0, 0)');
    });

    it('opacity is 0.5', () => {
        cy.get('#modal')
            .before('opacity')
            .should('eq', '0.5');
    });

    it('animation duration is 500ms', () => {
        cy.get('#modal').css('transition-duration', '0.5s');
    });

    it('animation mode is ease-out', () => {
        cy.get('#modal').css('transition-timing-function', 'ease-out');
    });
});
