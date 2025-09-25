// cypress/e2e/network.js

export function keepNetwork(orderId, errorObj) {
    const status = errorObj.status || 'unknown'

    cy.writeFile(
        `cypress/downloads/network/${status}/${orderId}.json`,
        errorObj,
        { flag: 'a+' } // append
    )
}
