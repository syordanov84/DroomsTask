

export const baseUrl = 'https://www.demoblaze.com/';

export function navigateTo (url) {
    return cy.visit(url);
}
