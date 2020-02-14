const mocha = require("mocha")
const expect = require("chai").expect // hämta expect

const { app } = require("../index")
describe("oneindexTest", () => { // rimlig rubrik

    it("oneTestToCheckThemAll", () => { // namn som beskriver testet

        expect(app).to.exist // chai syntax, för assert

    })

})