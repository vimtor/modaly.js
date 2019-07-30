/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal user interface default features', () => {
    let modal;

    before(() => {
        cy.visit('/').then((contentWindow) => {
            modal = new Modaly('#modal', { document: contentWindow.document });
        });
    });

    it('is invisible at the start', () => {
        cy.get('#modal').should('be.not.visible');
    });

    it('is visible after clicking the button', () => {
        cy.get("[data-modaly-open='#modal']").click();
        cy.get('#modal').should('be.visible');
    });

    it('is invisible again after clicking the close button', () => {
        cy.get('#modal > [data-modaly-close]').click();

        cy.get('#modal').should('be.not.visible');
    });

    it('opens with show method of modal class', () => {
        modal.show();

        cy.get('#modal').should('be.visible');
    });

    it('closes with hide method of modal class', () => {
        modal.hide();

        cy.get('#modal').should('be.not.visible');
    });
});
