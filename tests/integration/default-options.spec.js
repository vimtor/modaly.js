/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal default options', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', {
                document: contentWindow.document,
            });
        });
    });

    it('closes by pressing the ESC key', () => {
        cy.get("[data-modaly-open='#modal']").click();
        cy.get('body').trigger('keyup', { key: 'Escape' });

        cy.get('#modal').should('be.not.visible');
    });

    it('closes by clicking the overlay', () => {
        cy.get("[data-modaly-open='#modal']").click();
        cy.get('#modal').click();

        cy.get('#modal').should('be.not.visible');
    });

    it('background color is black', () => {
        cy.get('#modal')
            .before('background-color')
            .should('eq', 'rgb(0, 0, 0)');
    });

    it('opacity is 0.75', () => {
        cy.get('#modal')
            .before('opacity')
            .should('eq', '0.75');
    });

    it('animation duration is 250ms', () => {
        cy.get('#modal').css('transition-duration', '0.25s');
    });

    it('animation mode is ease-in', () => {
        cy.get('#modal').css('transition-timing-function', 'ease-in');
    });
});
