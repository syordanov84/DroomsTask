import { baseUrl, navigateTo } from "./Navigation";
import { LoginData, TestData } from "./TestData";
import { Selectors } from "./PageSelectors";
import { AssertPopupMessage } from "./PageAssertions";
import { Actions } from "./Actions";

describe('Drooms UI tests', () => {
    beforeEach(() => {
        navigateTo(baseUrl);
    });

    it('Verifies categories on homepage', () => {
        Selectors.category().should('have.length', 3);
        Object.values(TestData.categories).forEach((category) => {
            Selectors.category(category).should('be.visible');
        });
    }); 

    it('Verifies all card blocks on the homepage have price tag', () => {
        Selectors.cardBlocks().each((card) => {
            cy.wrap(card).contains('$').should('exist');
        });
    }); 

    it('Logs, adds item, verifies popup', () => {
        Selectors.callLogInForm().click();
        cy.wait(400);
        Actions.LogIn(LoginData.username, LoginData.password);

        Selectors.logOutBtn().should('be.visible');
        Selectors.callLogInForm().should('not.be.visible');

        Actions.addItemToCart(TestData.items.SamsungPhone);

        AssertPopupMessage('Product added.');
    });
});