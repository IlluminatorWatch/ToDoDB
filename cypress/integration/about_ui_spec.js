describe("About page", () => {

    it("Should load about page", () => {

        cy.visit("http://localhost:8004/row") // Ha koll på din port

        cy.contains("About").click()

        cy.url().should("include", "/about")

        cy.contains("This todo app was created by Adam")





    })



})

// Kemal Demirtas