/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal accesibility defaults', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', { document: contentWindow.document });
        });
    });

    it("role attribute equals 'dialog'", () => {
        cy.modal().should('have.attr', 'role', 'dialog');
    });

    it("aria-modal attribute equals 'true'", () => {
        cy.modal().should('have.attr', 'aria-modal', 'true');
    });

    it("aria-hidden attribute equals 'true' by default", () => {
        cy.modal().should('have.attr', 'aria-hidden', 'true');
    });

    it("aria-hidden attribute equals 'false' when opened", () => {
        cy.open();
        cy.modal().should('have.attr', 'aria-hidden', 'false');
    });

    it("aria-hidden attribute equals 'true' when closed", () => {
        cy.close();
        cy.modal().should('have.attr', 'aria-hidden', 'true');
    });

    it("aria-label of modal close trigger equals 'close modal'", () => {
        cy.get('#modal > [data-modaly-close]').should(
            'have.attr',
            'aria-label',
            'close this dialog',
        );
    });
});

describe('modal accesibility off', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', {
                accessible: false,
                document: contentWindow.document,
            });
        });
    });

    it('accesibility attributes do not exist', () => {
        cy.modal().should('not.have.attr', 'role');
        cy.modal().should('not.have.attr', 'aria-modal');
        cy.modal().should('not.have.attr', 'aria-hidden');
    });

    it('aria-hidden is not created by triggers', () => {
        cy.open();
        cy.modal().should('not.have.attr', 'aria-hidden');

        cy.close();
        cy.modal().should('not.have.attr', 'aria-hidden');
    });
});
