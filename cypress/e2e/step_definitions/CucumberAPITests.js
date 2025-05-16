import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { RequestCall } from "../POM Cypress/DrromsTask/API/Actions.js";
import { Url } from "../POM Cypress/DrromsTask/API/Navigation.js";
import { APITestingData } from "../POM Cypress/DrromsTask/API/TestData.js";

Then("I make a GET request to the homepage and I see that entries endpoint returns {string} results", (results) => {
    RequestCall.getRequest(Url.baseUrl, Url.endpoints.entries)
      .then((response) => {
        expect(response.body.Items.length).to.eq(parseInt(results));
      })
    });

Then("I make a POST request and I see that category {string} returns {string} items", (cat, items) => {
        RequestCall.postRequest(Url.baseUrl, Url.endpoints.category, {category: cat})
        .then((response) => {
          expect(response.body.Items.length).to.eq(parseInt(items));
          })
        });
    
When ("I log into the application with username and password", () => {
          RequestCall.postRequest(Url.baseUrl, Url.endpoints.login, {
            username: APITestingData.logindata.username,
            password: APITestingData.logindata.password,
          })
          .then((response) => {
            expect(response.status).to.eq(200);
        })
    });

When ("I select {string}", (item) => {
          RequestCall.postRequest(Url.baseUrl, Url.endpoints.view, {
            id: APITestingData.requestData.body.prod_id[item]
          });
    });

When ("I add {string} to the cart", (item) => {
    RequestCall.postRequest(Url.baseUrl, Url.endpoints.addToCart, {
        cookie: APITestingData.requestData.body.cookie,
        flag: APITestingData.requestData.body.flag.True,
        id: APITestingData.requestData.body.id[item],
        prod_id: APITestingData.requestData.body.prod_id[item],});
    });

When ("I confirm that {string} is in the cart", (item) => {
    RequestCall.postRequest(Url.baseUrl, Url.endpoints.viewCart, {
        cookie: APITestingData.requestData.body.cookie,
        flag: APITestingData.requestData.body.flag.True,
      })
      .then((response) => {
        const cartItems = response.body.Items;
        const itemExists = cartItems.some((cartItem) => cartItem.prod_id === APITestingData.requestData.body.prod_id[item]);
        expect(itemExists).to.be.true;
      });
    })