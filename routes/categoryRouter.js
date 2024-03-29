const categoryController = require("../controllers/categoryController");
const router = require("express").Router();
const auth = require("../middlewares/auth");

router.post(
  "/",
  auth.authenticateUser,
  auth.isAdmin,
  categoryController.createCategory
);
router.get("/", auth.authenticateUser, categoryController.getCategories);
router.get(
  "/:categoryId",
  auth.authenticateUser,
  categoryController.getCategoryById
);
router.put(
  "/:categoryId",
  auth.authenticateUser,
  auth.isAdmin,
  categoryController.updateCategoryById
);
router.delete(
  "/:categoryId",
  auth.authenticateUser,
  auth.isAdmin,
  categoryController.deleteCategoryById
);

module.exports = router;
