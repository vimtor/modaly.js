/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal callbacks', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', {
                onShow: async () => {
                    await cy.setCookie('opened', 'true');
                },
                onHide: async () => {
                    await cy.setCookie('closed', 'true');
                },
                document: contentWindow.document,
            });
        });
    });

    it('show callback gets fired with the trigger and the modal as parameters', () => {
        cy.setCookie('opened', 'false');
        cy.open();

        cy.getCookie('opened').should('have.property', 'value', 'true');
    });

    it('hide callback gets fired with the trigger and the modal as parameters', () => {
        cy.setCookie('closed', 'false');
        cy.close();

        cy.getCookie('closed').should('have.property', 'value', 'true');
    });
});
