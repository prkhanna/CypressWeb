  class OverViewPage{

    validateRecordCreation(data,randomNumber){
        cy.get("img[src='/images/axialis/documents-folders/link.svg']").click();

        cy.get('#contentTopTitle').should('contain', data.objName)
        cy.contains(".key", "Seri").next().find('span')
        .should("have.text",randomNumber)
    }

}
export const overViewPage =  new OverViewPage();