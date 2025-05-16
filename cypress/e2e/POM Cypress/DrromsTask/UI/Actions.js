import { Selectors } from "./PageSelectors";

export const Actions = {
    LogIn(username, password) {
      Selectors.loginUsernameField().type(username);
      Selectors.loginPasswordField().type(password);
      Selectors.loginBtn().click();
  },
  
    addItemToCart(item) {
      cy.get('a').contains(item).click();
      Selectors.addToCartBtn().click();
      },
  }