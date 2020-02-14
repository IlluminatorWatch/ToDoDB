const express = require("express");
const Row = require("../model/row")
const router = express.Router();
// const About = require("../model/row/about")

router.get("/about", (req, res) => {
  // const about = new About()
  res.send("This todo app was created by Adam");

})

router.post("/createrow", async (req, res) => {
  //req.body.allanameproperties nu tar vi bort hårdkodat "Kalle" & "Hej Hej" och låter användaren mata in via input req.body.text & author//
  const row = new Row({
    text: req.body.text,
    tag: req.body.tag,
    //  date: req.body.date
  })
  //console.log(req.body.date)

  const response = await row.save((err) => err ? res.redirect("/row") : res.redirect("/row"));
  console.log(response)
  // res.redirect("/row")
  next()
  //new Comment({text:"testdata", author:"authorname"}).save();
})
const items = 4;
// Vi redirectar hit via route istället för res.render("comment")
router.get("/row", async (req, res) => {
  // const order = {text: req.query.timesort} || {date:req.query.textsort}||{tag: req.query.tagOrder};
  const order = { text: req.query.textsort };
  /* const timeOrder = req.query.timesort;
  const tagOrder = req.query.tagsort;
  const textOrder = req.query.textsort; */
  // const rows = await Row.find().sort({text:textOrder, tag:tagOrder, date:timeOrder});
  const page = req.query.page;
  const rows = await Row
    .find()
    .sort(order)
    .skip((page - 1) * items)
    .limit(4)
    .select({ date: 1, text: 1, tag: 1 });

  console.log(req.query.page);
  // vi renderar detta via views comment.ejs comments är en array som vi kan loopa
  res.render("row", { rows: rows });
})

router.get("/delete/:id", async (req, res) => {
  console.log(req.params.id)
  // const rows = await Row.find()
  // vi renderar detta via views comment.ejs comments är en array som vi kan loopa
  // res.render("row", {rows: rows});
  await Row.deleteOne({ _id: req.params.id });
  // res.send("it works");
  res.redirect("/row");
})
router.get("/update/:id", async (req, res) => {
  // vill hämta bara en data från databas
  // sen skicka den till edit sidan
  const response = await Row.findById({ _id: req.params.id })
  console.log(response);
  res.render("edit", { response })
})
router.post("/update/:id", async (req, res) => {
  // använd updateOne-methoden för att kunna redigera comment
  await Row.updateOne({ _id: req.body._id }, { $set: { text: req.body.text, tag: req.body.tag } })
  console.log(req.body);
  // res.send("test")
  res.redirect("/row")
})
module.exports = router;