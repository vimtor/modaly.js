/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal works with default features triggered by the user', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', { document: contentWindow.document });
        });
    });

    it('is invisible at the start', () => {
        cy.modal().should('be.not.visible');
    });

    it('is visible after clicking the button', () => {
        cy.open();
        cy.modal().should('be.visible');
    });

    it('is invisible again after clicking the close button', () => {
        cy.close();

        cy.modal().should('be.not.visible');
    });
});

describe('modal works with default features programatically', () => {
    it('opens with show method of modal class', () => {
        cy.visit('/').then((contentWindow) => {
            const modal = new Modaly('#modal', { document: contentWindow.document });
            modal.show();

            cy.modal().should('be.visible');
        });
    });

    it('closes with hide method of modal class', () => {
        cy.visit('/').then((contentWindow) => {
            const modal = new Modaly('#modal', { document: contentWindow.document });
            modal.hide();

            cy.modal().should('be.not.visible');
        });
    });
});
