describe('Works offline', () => {
  it('loads the app even when offline', () => {
    cy.visit('/')


    // Create bunch of lists
    const created_lists = []
    for (let i = 0; i < 5; i++) {
      const listName = 'My List ' + Date.now();
      cy.get('#addNewList').click();
      cy.get('#listName').type(listName);
      cy.get('#placeName').type('My Place');
      cy.get('#addList').click();
      cy.contains('.main-content', listName, { timeout: 10000 }).should('exist');
      created_lists.push(listName)
    }

    // Go offline
    goOffline()

    // Reload the page
    cy.reload()

    // Check if the lists are still there
    created_lists.forEach(listName => {
      cy.contains('.main-content', listName).should('exist')
    })
  })
}
)

const goOffline = () => {
  cy.log('**go offline**')
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.enable',
        })
    })
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.emulateNetworkConditions',
          params: {
            offline: true,
            latency: -1,
            downloadThroughput: -1,
            uploadThroughput: -1,
          },
        })
    })
}