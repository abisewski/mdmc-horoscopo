const express = require('express');
const app = express();

app.engine(".html", require("ejs").__express);
app.use(express.static(__dirname + "/views/public"));

app.set("view engine", "html");

app.get("/", function (req, res) {
  console.log(__dirname)
  res.render("pages/index")
});


const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});