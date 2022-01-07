const Router = require("../framework/Router");
const controller = require("./user-controler");

const router = new Router();

router.get("/users", controller.getUser);

router.post("/users", controller.createUser);

// router.get("/posts", (req, res) => {
//   res.end("YOU SEND REQUEST TO /POSTS");
// });

module.exports = router;
