export const Utils = {
    waitForElement(selector, timeout = 5000) {
        cy.get(selector, { timeout }).should('be.visible');
    }
}