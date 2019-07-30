/// <reference types="cypress" />

import Modaly from '../../src/modaly';

describe('modal accesibility setup', () => {
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
});
