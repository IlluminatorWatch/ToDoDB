const express = require("express");
const Row = require("../model/row")
const router = express.Router();

router.post("/createrow", async (req, res) => {
//req.body.allanameproperties nu tar vi bort hårdkodat "Kalle" & "Hej Hej" och låter användaren mata in via input req.body.text & author//
const row = new Row({
        text: req.body.text, 
        tag: req.body.tag
    })
 const response = await row.save();
  console.log(response)
  res.redirect("/row")

  //new Comment({text:"testdata", author:"authorname"}).save();
})
// Vi redirectar hit via route istället för res.render("comment")
router.get("/row", async (req, res) => {
    const rows = await Row.find()
    // vi renderar detta via views comment.ejs comments är en array som vi kan loopa
     res.render("row", {rows: rows});
})

router.get("/delete/:id", async (req, res) => {
    console.log(req.params.id)
    // const rows = await Row.find()
    // vi renderar detta via views comment.ejs comments är en array som vi kan loopa
    // res.render("row", {rows: rows});
    await Row.deleteOne({_id:req.params.id});
    // res.send("it works");
    res.redirect("/row");
})
router.get("/update/:id", async (req, res)=>{
    // vill hämta bara en data från databas
    // sen skicka den till edit sidan
    const response = await Row.findById({_id:req.params.id})
    console.log(response);
    res.render("edit", {response})
})
router.post("/update/:id", async (req, res)=>{
    // använd updateOne-methoden för att kunna redigera comment
    await Row.updateOne({_id:req.body._id}, {$set: {text: req.body.text, tag: req.body.tag} })
    console.log(req.body);
    // res.send("test")
    res.redirect("/row")
  })
module.exports = router;