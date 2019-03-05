var express =require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.render("home")
});

app.get("/about", function (req, res) {
    res.render("about")
});

app.listen(3000, function () {
   console.log("Server has launched...")
});