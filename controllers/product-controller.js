exports.getProduct = (req, res, next) => {
  res.render("get-product", {
    pageTitle: "Add Product",
    message: "Masukan nama produk yang ingin ditambahkan",
  });
};

exports.insertProduct = (req, res, next) => {
  res.redirect("/user");
};
