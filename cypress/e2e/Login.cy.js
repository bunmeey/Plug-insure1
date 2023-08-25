import { Login } from "../fixtures/Selectors";


describe("Given I am on the orders page", function () {
    beforeEach(function () {
        cy.visit('/')


    });


    it("LOGIN - I Should be able to sign in my account with valid", function () {
        cy.get(Login.emailField).type('bukky@yopmail.com')
        cy.get(Login.Password).type("Bunmi123@")
    })




})
