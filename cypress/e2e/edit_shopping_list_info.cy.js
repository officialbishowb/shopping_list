describe("Edit a created shopping list info", function () {
    it("should edit a shopping list name", function () {
        cy.visit("/");
    
        const listName = "My List " + Date.now();
        const newName = "Edited My New List " + Date.now();
    
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
            .find("#editShoppingList")
            .click();
    
        // Edit the list name
        cy.get("#listName").clear().type(newName);

        // Click the edit button
        cy.get("#addList").click();
    });
    }
);