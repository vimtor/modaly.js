describe('modal callbacks', () => {
    before(() => {
        cy.visit('/');
        cy.wait(100);
    });

    const modal = '#modal';
    const openTrigger = `[data-modaly-open='${modal}']`;
    const closeTrigger = '[data-modaly-close]';

    it('show callback gets fired with the trigger and the modal as parameters', () => {
        cy.get(openTrigger).click();
        cy.get('#tester').then((tester) => {
            expect(tester[0].dataset.modal).to.be.equal('modal');
            expect(tester[0].dataset.trigger).to.be.equal('open-trigger');
        });
    });

    it('hide callback gets fired with the trigger and the modal as parameters', () => {
        cy.get(modal)
            .children(closeTrigger)
            .click();

        cy.get('#tester').then((tester) => {
            expect(tester[0].dataset.modal).to.be.equal('modal');
            expect(tester[0].dataset.trigger).to.be.equal('close-trigger');
        });
    });
});
