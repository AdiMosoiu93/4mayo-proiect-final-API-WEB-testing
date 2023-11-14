class navigationBar {
    getHomeButton(){
        return cy.get('.navbar-header');
    }

    getLoginRegisterButton(){
        return cy.get('#customer_menu_top');
    }
}

export default new navigationBar();