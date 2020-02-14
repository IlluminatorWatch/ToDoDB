// Här skriver vi våra UI tester




// Mocha syntax:
describe("UI tests for ToDo app", () => { // Valfri testrubrik som beskriver att detta är en samling av test för dina app/sida/whatever

    it("Should add an todo item and then delete it", () => {

        cy.visit("http://localhost:8004/row")

        // cy.contains("type").click()

        // cy.url().should("include", "/commands/actions")

        // cy.get("@email").type("blablablablaha@email.com").should("have.value", "blablablablaha@email.com")

        // cy.get("")

        cy.contains("Things to do in tender Denver")

        cy.get("#second > form > input[type=text]:nth-child(1)")
            .type("kasta sopor")
            .should("have.value", "kasta sopor") // Här väljer vi input att skriva in en ny todo-post
        cy.get("#fieldB").type("tag").should("have.value", "tag")
        cy.get("#posttodo").click() // Här klickar vi på submitknappen/länken
        cy.contains("Delete").click() // Här tar vi bort elementet vi nyss lagt in
        // cy.contains("Delete").each(() => {
        //     cy.contains("Delete").first().click()
        // })

        // cy.contains("Delete").click({ multiple: true }) // klickar på alla delete-element
        // cy.url().should("include, delete/edit")
        // cy.get("#inputelement för att lägga till") //input username
        //     .type("kasta sopor").should("have.value", "kasta sopor")
        // cy.contains("Denver")
        // cy.url().should("include", "/row/update")
        // Kolla om en länk finns, eller en knapp eller något.
        // Om du har en länk som heter t.ex. "nästa" så går det bra

        // Vi ska klicka på en länk

        // Kontrollera att vi hamnar på rätt sökväg t.ex. /todo/delete
    })

})