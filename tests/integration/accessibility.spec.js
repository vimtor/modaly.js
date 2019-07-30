/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal accesibility defaults', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', { document: contentWindow.document });
        });
    });

    it("role attribute equals 'dialog'", () => {
        cy.get('#modal').should('have.attr', 'role', 'dialog');
    });

    it("aria-modal attribute equals 'true'", () => {
        cy.get('#modal').should('have.attr', 'aria-modal', 'true');
    });

    it("aria-hidden attribute equals 'true' by default", () => {
        cy.get('#modal').should('have.attr', 'aria-hidden', 'true');
    });

    it("aria-hidden attribute equals 'false' when opened", () => {
        cy.get('[data-modaly-open]').click();
        cy.get('#modal').should('have.attr', 'aria-hidden', 'false');
    });

    it("aria-hidden attribute equals 'true' when closed", () => {
        cy.get('#modal > [data-modaly-close]').click();
        cy.get('#modal').should('have.attr', 'aria-hidden', 'true');
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
        cy.get('#modal').should('not.have.attr', 'role');
        cy.get('#modal').should('not.have.attr', 'aria-modal');
        cy.get('#modal').should('not.have.attr', 'aria-hidden');
    });

    it('aria-hidden is not created by triggers', () => {
        cy.get('[data-modaly-open]').click();
        cy.get('#modal').should('not.have.attr', 'aria-hidden');

        cy.get('#modal > [data-modaly-close]').click();
        cy.get('#modal').should('not.have.attr', 'aria-hidden');
    });
});
