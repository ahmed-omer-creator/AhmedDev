const mg = require("mongoose");
const schema = mg.Schema;

const schemalook = new schema ({
    userName:String,
    Email:String,
    Message:String,
})

const mymodel = mg.model("messagedt", schemalook);

module.exports = mymodel