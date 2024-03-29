const userController = require("../controllers/userController");
const router = require("express").Router();
const auth = require("../middlewares/auth");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/", auth.authenticateUser, auth.isAdmin, userController.getUsers);
router.get("/:userId", auth.authenticateUser, userController.getUserById);
router.put("/:userId", auth.authenticateUser, userController.updateUserById);
router.delete(
  "/:userId",
  auth.authenticateUser,
  auth.isAdmin,
  userController.deleteUserById
);

module.exports = router;
