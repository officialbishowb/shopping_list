describe("Check if the app is a web app", function () {
    it("should check if the app is a web app", function () {
        cy.visit('/');
        cy.get('#app').contains('Shopping Lists').should('exist');
    });
}
);