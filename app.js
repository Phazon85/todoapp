let express = require('express');
let bodyParser = require('body-parser')
let app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    let day = today.toLocaleDateString("en-us", options);

    res.render("list", {kindofDay: day, newListItem: items});
});

app.post("/", function(req, res) {
    let item = req.body.newItem

    items.push(item);

    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port " + process.env.PORT);
});