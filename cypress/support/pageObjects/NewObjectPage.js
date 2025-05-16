 class NewObjectPage {

createNewObject(data,randomNumber){

   //new  record creation
   cy.get("#navbar_item_C__NAVMODE__NEW").click()

  // Filling data of General Section
   cy.get ("#C__CATG__GLOBAL_TITLE").type(data.objName);
   cy.get ("#navbar_item_C__NAVMODE__SAVE").click();
   cy.get('.box-green').should('be.visible')

   this.addOrSelectDropdown('#C__CATG__GLOBAL_CATEGORY',data.category);
   this.addOrSelectDropdown('#C__CATG__GLOBAL_PURPOSE',data.purpose);
  
   //filling data for the Model section
  this.addOrSelectDropdown("#C__CATG__MODEL_MANUFACTURER",data.model)

  cy.get("#C__CATG__MODEL_SERVICE_TAG").type (data.serviceTag)
  cy.get("#C__CATG__MODEL_PRODUCTID").type(data.productId)
  cy.get("#C__CATG__MODEL_SERIAL").type(randomNumber)
  this.addOrSelectDropdown("#C__CATG__MODEL_TITLE_ID","BLc7000")

  cy.get ("#navbar_item_C__NAVMODE__SAVE").click();
}


/**
 * Methods adds or select dropdown values
 *
 * @param  selector - cssSelector.
 * @param value- value to be selected or added to the dropdown
 * 
 */
     addOrSelectDropdown(selector, value) {
      let found = false;
    
      cy.get(selector).each(($el) => {
        const optionText = $el.text().trim();
    
        if (optionText.includes(value)) {
          found = true;
        }
      }).then(() => {
        if (found) {
          cy.get(selector).select(value);
        } else {
          //open modal window
          cy.get(selector).next().click(); 
          cy.get('#popup-dialog-plus-new-value').type(value);
          cy.get('#popup-dialog-plus-add-new-value').click();
          //  save the newly added value
           cy.get('#popup-dialog-plus-save').click();
        }
      });
    }

}
export const newObjectPage = new NewObjectPage();