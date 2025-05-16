// import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

import { RequestCall } from "../API/Actions.js";
import { Url } from "./Navigation.js";
import { APITestingData } from "../API/TestData.js";

describe('Drooms API tests', () => { 
  it("Assert /entries endpoint", () => {
    RequestCall.getRequest(Url.baseUrl, Url.endpoints.entries)
    .then((response) => {
      expect(response.body.Items.length).to.eq(9);
    })
  })

  it("Assert Laptops category items count", () => {
    RequestCall.postRequest(Url.baseUrl, Url.endpoints.category, { category: APITestingData.requestData.body.category.Laptop})
    .then((response) => {
      expect(response.body.Items.length).to.eq(6);
      cy.log(JSON.stringify(response.body));
    });
  })

  it("Assert Phones category items count", () => {
    RequestCall.postRequest(Url.baseUrl, Url.endpoints.category, {category: APITestingData.requestData.body.category.Phone})
    .then((response) => {
      expect(response.body.Items.length).to.eq(7);
      cy.log(JSON.stringify(response.body));
    });
  })

  it("Assert Monitors category items count", () => {
    RequestCall.postRequest(Url.baseUrl, Url.endpoints.category, {category : APITestingData.requestData.body.category.Monitor})
    .then((response) => {
      expect(response.body.Items.length).to.eq(2);
      cy.log(JSON.stringify(response.body));
    });
  })

  it("Login and add 2 phones into the cart", () => {
    RequestCall.postRequest(Url.baseUrl, Url.endpoints.login, {
      username: APITestingData.logindata.username,
      password: APITestingData.logindata.password,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });

    RequestCall.postRequest(Url.baseUrl, Url.endpoints.view, {
      id: APITestingData.requestData.body.prod_id['Samsung galaxy s6'],
    })
    .then((response) => {
      expect(response.body.title).to.eq("Samsung galaxy s6");
      cy.log(JSON.stringify(response.body));
    });

    RequestCall.postRequest(Url.baseUrl, Url.endpoints.addToCart, {
      cookie: APITestingData.requestData.body.cookie,
      flag: APITestingData.requestData.body.flag.True,
      id: APITestingData.requestData.body.id['Samsung galaxy s6'],
      prod_id: APITestingData.requestData.body.prod_id['Samsung galaxy s6'],})
    .then((response) => {
      cy.log(JSON.stringify(response));
    });

    RequestCall.postRequest(Url.baseUrl, Url.endpoints.view, {
      id: APITestingData.requestData.body.prod_id['HTC One M9'],
    })
    .then((response) => {
      expect(response.body.title).to.eq("HTC One M9");
    });

    RequestCall.postRequest(Url.baseUrl, Url.endpoints.addToCart, {
      cookie: APITestingData.requestData.body.cookie,
      flag: APITestingData.requestData.body.flag.True,
      id: APITestingData.requestData.body.id['HTC One M9'],
      prod_id: APITestingData.requestData.body.prod_id['HTC One M9'],})
    .then((response) => {
      cy.log(JSON.stringify(response.body));
    });

    RequestCall.postRequest(Url.baseUrl, Url.endpoints.viewCart, {
      cookie: APITestingData.requestData.body.cookie,
      flag: APITestingData.requestData.body.flag.True,
    })
    .then((response) => {
      expect(response.body.Items[0].prod_id).to.eq("1");
      expect(response.body.Items[1].prod_id).to.eq("7");
    });
  }) 
})

