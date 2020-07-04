let express = require('express');
let bodyParser = require('body-parser')
let app = express();

let  items = ["I like Tacos.", "Tacos are good."];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));


app.get("/", function(req, res) {


    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    let day = today.toLocaleDateString("en-us", options);

    res.render("list", {kindofDay: day, newListItems: items});
});

app.post("/", function(req, res) {
    let item = req.body.newItem

    items.push(item);

    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port " + process.env.PORT);
});