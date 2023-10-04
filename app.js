const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressEjsLayouts)

app.get("/", function (req, res) {
	res.render("pages/home", { layout: 'layouts/public.ejs' });
});

app.get("/about", function (req, res) {
	res.render("pages/about", { layout: 'layouts/public.ejs' });
});

app.get("/contact", function (req, res) {
	res.render("pages/contact", { layout: 'layouts/public.ejs' });
});

app.get('/dashboard', function (req, res) {
	res.render("pages/dashboard", { layout: 'layouts/private.ejs' })
})

app.get('/products', function (req, res) {
	res.render("pages/products", { layout: 'layouts/private.ejs' })
})

app.get('/users', function (req, res) {
	res.render("pages/users", { layout: 'layouts/admin.ejs' })
})

app.listen(8080);
console.log("Server is listening on port 8080");
