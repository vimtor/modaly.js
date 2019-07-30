function unquote(str) {
    return str.replace(/(^")|("$)/g, '');
}

Cypress.Commands.add(
    'before',
    {
        prevSubject: 'element',
    },
    (el, property) => {
        const win = el[0].ownerDocument.defaultView;
        const before = win.getComputedStyle(el[0], 'before');
        return unquote(before.getPropertyValue(property));
    },
);

Cypress.Commands.add(
    'css',
    {
        prevSubject: 'element',
    },
    (el, property, value) => {
        expect(el).to.have.css(property, value);
    },
);

Cypress.Commands.add('modal', () => cy.get('#modal'));

Cypress.Commands.add('open', () => cy.get('[data-modaly-open]').click());
Cypress.Commands.add('close', () => cy.get('#modal > [data-modaly-close]').click());
