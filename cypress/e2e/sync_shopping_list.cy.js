describe("Sync shopping list", function () {
    it("should sync a shopping list with another device or browser", function () {
        cy.visit('/');

        const syncUrl = Cypress.env('syncUrl');
        // Add the sync url
        cy.get('#settings').click();
        cy.get('#syncUrlInput').type(syncUrl);
        cy.get('#startSync').click();



        // Check if the sync status "Syncing" is displayed after 10 seconds
        cy.reload();
        cy.contains('#app', 'Syncing', { timeout: 10000 }).should('exist');



    });
}
);


const addSyncUrl = (url) => {
   
}
