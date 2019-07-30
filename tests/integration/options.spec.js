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

    it('closes by pressing the Escape key', () => {
        cy.open();
        cy.document().trigger('keyup', { key: 'Escape' });

        cy.modal().should('be.not.visible');
    });

    it('closes by pressing the Esc key', () => {
        cy.open();
        cy.document().trigger('keyup', { key: 'Esc' });

        cy.modal().should('be.not.visible');
    });

    it('closes by pressing the escape with key code', () => {
        cy.open();
        cy.document().trigger('keyup', { keyCode: 27, which: 27 });

        cy.modal().should('be.not.visible');
    });

    it('closes by clicking the overlay', () => {
        cy.open();
        cy.modal().click();

        cy.modal().should('be.not.visible');
    });

    it('does not closing by pressing any key besides ESC', () => {
        cy.open();
        cy.modal().click();

        cy.document().trigger('keyup', { key: 'Space' });

        cy.modal().should('be.not.visible');
    });

    it('background color is black', () => {
        cy.modal()
            .before('background-color')
            .should('eq', 'rgb(0, 0, 0)');
    });

    it('opacity is 0.75', () => {
        cy.modal()
            .before('opacity')
            .should('eq', '0.75');
    });

    it('animation duration is 250ms', () => {
        cy.modal().css('transition-duration', '0.25s');
    });

    it('animation mode is ease-in', () => {
        cy.modal().css('transition-timing-function', 'ease-in');
    });
});

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
        cy.open();
        cy.document().trigger('keyup', { key: 'Escape' });

        cy.modal().should('be.visible');
    });

    it('does not close by clicking the overlay', () => {
        cy.modal().click();

        cy.modal().should('be.visible');
    });

    it('closes by clicking the close trigger', () => {
        cy.modal()
            .children('[data-modaly-close]')
            .click();

        cy.modal().should('be.not.visible');
    });

    it('background color is red', () => {
        cy.modal()
            .before('background-color')
            .should('eq', 'rgb(255, 0, 0)');
    });

    it('opacity is 0.5', () => {
        cy.modal()
            .before('opacity')
            .should('eq', '0.5');
    });

    it('animation duration is 500ms', () => {
        cy.modal().css('transition-duration', '0.5s');
    });

    it('animation mode is ease-out', () => {
        cy.modal().css('transition-timing-function', 'ease-out');
    });
});

describe('modal opacity sets duration to 0', () => {
    before(() => {
        cy.visit('/').then((contentWindow) => {
            new Modaly('#modal', {
                opacity: 0,
                document: contentWindow.document,
            });
        });
    });

    it('opacity is 0', () => {
        cy.modal()
            .before('opacity')
            .should('eq', '0');
    });

    it('animation duration is 0 seconds', () => {
        cy.modal().css('transition-duration', '0s');
    });
});
