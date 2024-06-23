describe("Delete a created shopping list", function () {
    it("should delete a shopping list", function () {
        cy.visit("/");
    
        const listName = "My List " + Date.now();
    
        cy.get("#addNewList").click();
        cy.get("#listName").type(listName);
        cy.get("#placeName").type("My Place");
        cy.get("#addList").click();
    
        // Wait for the new list to be added to the DOM
        cy.contains(".main-content", listName, { timeout: 10000 }).should("exist");
    

        // Click on more options
        cy.get(".main-content")
            .contains(listName)
            .parent()
            .parent()
            .find("#moreShoppingListOption")
            .click();
            
        // Click the delete button
        cy.get(".main-content")
            .contains(listName)
            .parent()
            .parent()
            .find("#deleteShoppingList")
            .click();
    
        // Check that the list is deleted
        cy.contains(".main-content", listName).should("not.exist");
    });
    }
);