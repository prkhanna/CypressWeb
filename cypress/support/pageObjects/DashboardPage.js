 class DashboardPage{

    openDashboardPageInLanguage(data){
        cy.get('h2').should('contain.text', 'Dashboard');
        cy.get("img[alt='toggle']").click()
        cy.get("ul[class='menu-dropdown'] li a").contains('span', data.lang).click({force: true});
        if(data.lang === "EN"){
            cy.get("#globalSearch").should('have.attr', 'placeholder', "Search")
        }else{
        cy.get("#globalSearch").should('have.attr', 'placeholder', "Suche")
        }
    }

    navigateToObjectTypeGroup(dataGroup){
        cy.get("#menuItem_object-type-group").click()
        cy.get("ul[id='object-type-group-dropdown']").contains(dataGroup).click();
    }

    navigateToObjectType(name){
        const nav = `.C__OBJTYPE__${name}`;
        cy.get(nav).find('span').first().click();
    }
}
export const dashboardPage = new DashboardPage();