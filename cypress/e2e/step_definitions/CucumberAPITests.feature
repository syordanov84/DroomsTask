Feature: Cucumber API tests

Scenario: Verifies categories on homepage
    Given I make a GET request to the homepage and I see that entries endpoint returns "9" results

Scenario: Verifies that each category returns their respective number of items
    Given I make a POST request and I see that category "notebook" returns "6" items
        And I make a POST request and I see that category "phone" returns "7" items
        And I make a POST request and I see that category "monitor" returns "2" items

Scenario: Login to app, add 2 items to cart and verifies that the items are added
    When I log into the application with username and password
        And I select "Samsung galaxy s6"
        And I add "Samsung galaxy s6" to the cart
    Then I confirm that "Samsung galaxy s6" is in the cart
    When I select "HTC One M9"
        And I add "HTC One M9" to the cart
    Then I confirm that "HTC One M9" is in the cart