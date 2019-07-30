/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal singularities check', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', {
                opacity: 0,
                document: contentWindow.document,
            });
        });
    });

    it('opacity is 0', () => {
        cy.get('#modal')
            .before('opacity')
            .should('eq', '0');
    });

    it('animation duration is 0 seconds', () => {
        cy.get('#modal').css('transition-duration', '0s');
    });
});
