export function AssertPopupMessage(expectedMsg){
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal(expectedMsg);
    });
}