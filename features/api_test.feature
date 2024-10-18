Feature: API Testing with Playwright

  Scenario: Get user data from API
    Given I send a GET request to "/users/1"
    Then the response status code should be 200
    And the response body should contain "username"
