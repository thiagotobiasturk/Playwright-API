const { Given, Then, Before } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');
const { expect } = require('@playwright/test');

let response;

Before(async function () {
  this.apiContext = await request.newContext();
});

Given('I send a GET request to {string}', async function (endpoint) {
  response = await this.apiContext.get(`https://jsonplaceholder.typicode.com${endpoint}`);
});

Then('the response status code should be {int}', function (statusCode) {
  expect(response.status()).toBe(statusCode);
});

Then('the response body should contain {string}', async function (key) {
  const body = await response.json();
  expect(body).toHaveProperty(key);
});
