export const Selectors = {
    category: (cat) => cat ? cy.contains('.list-group-item', cat) : cy.get('.list-group-item').filter('#itemc'),
    cardBlocks: () => cy.get('.card-block'),
    callLogInForm: () => cy.get('#login2'),
    loginBtn: () => cy.contains('.btn', 'Log in'),
    logOutBtn: () => cy.get('#logout2'),
    loginUsernameField: () => cy.get('#loginusername'),
    loginPasswordField: () => cy.get('#loginpassword'),
    addToCartBtn: () => cy.get('a').contains('Add to cart'),
}
