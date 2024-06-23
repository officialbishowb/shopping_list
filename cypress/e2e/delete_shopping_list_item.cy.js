describe('Delete shopping list item', function () {

    it('should create a new item and delete it', function () {
      cy.visit('/');
  
  
      const listName = 'My List ' + Date.now();
      const itemName = 'Item ' + Date.now() + 1;
  
      cy.get('#addNewList').click();
      cy.get('#listName').type(listName);
      cy.get('#placeName').type('My Place');
      cy.get('#addList').click();
  
      // Wait for the new list to be added to the DOM
      cy.contains('.main-content', listName, { timeout: 10000 }).should('exist');
  
      // Click the list item addShoppingListItem button
      cy.get('.main-content').contains(listName).parent().parent().
      find('#addShoppingListItem').click();
  
      // Type the item name 
      cy.get('.main-content').find('#newItemName').type(itemName);
  
      // Click the add button
      cy.get('.main-content').find('#addToCart').click();
  
      // Check that the item is added to the list
      cy.get('.main-content').contains(itemName).should('exist');
  
      // Delete the item and check that it is deleted
        cy.get('.main-content').contains(itemName).parent().parent().
        find('button').click();

        // Check that the item is deleted
        cy.get('.main-content').contains(itemName).should('not.exist');
    });
  
  
  });
  