const { log } = require("console");
const ex = require("express");
const app = ex();
const mg = require("mongoose");
const port = 4450;
app.use(ex.urlencoded({ extended: true }));
const messagedt = require("./models/schema");
const path = require("path");

app.get("/succ", (req,res) => {
    res.sendFile(path.join(__dirname, "", "succ.html"));
})

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "", "index.html"));
})
mg.connect("mongodb+srv://ahmsha337:Ahmed_Top@customerrsdb.nmtyixt.mongodb.net/all-data").then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
        
    })
}).catch((err) => {
    console.log(err);
    
})

app.post("/succ",(req,res) => {
    console.log(req.body);
    const Mydata = new messagedt(req.body)
    Mydata.save()
    res.redirect("/succ");
    
})