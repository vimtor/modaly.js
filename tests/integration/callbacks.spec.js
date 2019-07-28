describe('modal callbacks', () => {
    before(() => {
        cy.visit('/');
        cy.wait(500);
    });

    it('show callback gets fired with the trigger and the modal as parameters', () => {
        cy.get('[data-modaly-open]').click();
        cy.get('#tester').then((tester) => {
            expect(tester[0].dataset.modal).to.be.equal('modal');
            expect(tester[0].dataset.trigger).to.be.equal('open-trigger');
        });
    });

    it('hide callback gets fired with the trigger and the modal as parameters', () => {
        cy.get('[data-modaly-close]').click();
        cy.get('#tester').then((tester) => {
            expect(tester[0].dataset.modal).to.be.equal('modal');
            expect(tester[0].dataset.trigger).to.be.equal('close-trigger');
        });
    });
});
