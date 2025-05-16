Feature: Cucumber UI tests

Scenario: Verifies categories on homepage
    Given I am on the home page
    Then I can confirm that I see "3" types of categories
        And I can confirm that I see category with name "Laptops"
        And I can confirm that I see category with name "Monitors"
        And I can confirm that I see category with name "Phones"

Scenario: Verifies that all the items show the price tag
    Given I am on the home page
    Then I can confirm that I see price tag on all items

Scenario: Verifies that user is logged in, item is added to card and pop up message is displayed
    Given I am on the home page
    When I login with username and password
    Then I can confirm that I see logout button and I don't see login button
    When I add item "Samsung galaxy s6" to cart
    Then I can confirm that I see popup message "Product added."