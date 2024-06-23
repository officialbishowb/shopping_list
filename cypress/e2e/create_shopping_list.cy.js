describe('Create a shopping list', function() {
    it('should create a shopping list', function() {
      cy.visit('/');
  
      const listName = 'My List ' + Date.now();
  
      cy.get('#addNewList').click();
      cy.get('#listName').type(listName);
      cy.get('#placeName').type('My Place');
      cy.get('#addList').click();
  
      // Wait for the new list to be added to the DOM
      cy.contains('.main-content', listName, { timeout: 10000 }).should('exist');

    });
  });
