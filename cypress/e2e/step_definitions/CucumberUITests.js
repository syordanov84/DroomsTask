import { Given ,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { baseUrl, navigateTo } from "../POM Cypress/DrromsTask/UI/Navigation";
import { LoginData, TestData } from "../POM Cypress/DrromsTask/UI/TestData";
import { AssertPopupMessage } from "../POM Cypress/DrromsTask/UI/PageAssertions";
import { Selectors } from "../POM Cypress/DrromsTask/UI/PageSelectors";
import { Actions } from "../POM Cypress/DrromsTask/UI/Actions";

Given("I am on the home page", () => {
    navigateTo(baseUrl);
  });

When("I login with username and password", () => {
    Selectors.callLogInForm().click();
    cy.wait(400);
    Actions.LogIn(LoginData.username, LoginData.password);
});

When("I add item {string} to cart", (item) => {
    Actions.addItemToCart(item);
});

Then("I can confirm that I see {string} types of categories", (number) => {
    Selectors.category().should('have.length', number);
});

Then("I can confirm that I see category with name {string}", (category) => {
    Selectors.category(TestData.categories[category]).should('be.visible');
});

Then("I can confirm that I see price tag on all items", () => {
    Selectors.cardBlocks().each((card) => {
        cy.wrap(card).contains('$').should('exist');
    });
});

Then("I can confirm that I see logout button and I don't see login button", () => {
    Selectors.logOutBtn().should('be.visible');
    Selectors.callLogInForm().should('not.be.visible');
})

Then("I can confirm that I see popup message {string}", (message) => {
    AssertPopupMessage(message);
});