const { Router } = require("express");

const { getUser } = require("../controllers/user-controller");
const {
  getProduct,
  insertProduct,
} = require("../controllers/product-controller");

const router = Router();

router.get("/user", getUser);

router.get("/product", getProduct);

router.post("/product", insertProduct);

module.exports = router;
