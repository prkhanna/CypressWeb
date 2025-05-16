/// <reference types="cypress" />
import {dashboardPage} from "../../support/pageObjects/DashboardPage"
import {newObjectPage} from "../../support/pageObjects/NewObjectPage"
import {overViewPage} from "../../support/pageObjects/OverviewPage"


describe('Feature for creation of new object', () => {

  before(function()  {
    cy.visit('/')
    cy.login(Cypress.env('username'),Cypress.env('password'))
    // Load the test data
    cy.fixture('test-data').then((data) => {
      this.data = data;
    });
  })

  it('Creation of Client Object', function () {
    const randomNumber = ('' + Math.random()).slice(2, 18);
    const ObjectTypeGroup = "Hardware"
     const ObjectType = "CLIENT"
    dashboardPage.openDashboardPageInLanguage(this.data)
    dashboardPage.navigateToObjectTypeGroup(ObjectTypeGroup);
    dashboardPage.navigateToObjectType(ObjectType);
    newObjectPage.createNewObject(this.data,randomNumber);
    overViewPage.validateRecordCreation(this.data,randomNumber);

  })

})
