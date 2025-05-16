export const Url ={
    baseUrl : 'https://api.demoblaze.com/',
    endpoints : {
        login: 'login',
        category: 'bycat',
        entries: 'entries',
        view: 'view',
        addToCart: 'addtocart',
        viewCart: 'viewcart',
    }
}

export function navigateTo (url) {
    return cy.visit(url);
}