const express = require("express");

const router = require("./routers");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.use("/", router);

app.use((req, res, next) => {
  res.render("404", {
    message: "Halaman yang anda cari tidak ada",
    data: "satu tambah satu dua",
  });
});

app.listen(8080, (error) => {
  if (error) console.log(error);
  else console.log("server running in port: 8080");
});
