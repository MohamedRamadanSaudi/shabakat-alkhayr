const postController = require("../controllers/postController");
const auth = require("../middlewares/auth");
const router = require("express").Router();

router.post("/", auth.authenticateUser, postController.createPost);
router.get(
  "/category/:categoryId",
  auth.authenticateUser,
  postController.getPostsByCategory
);
router.get("/", postController.getPosts);
router.get("/:postId", auth.authenticateUser, postController.getPostById);
router.put("/:postId", auth.authenticateUser, postController.updatePostById);
router.delete("/:postId", auth.authenticateUser, postController.deletePostById);

module.exports = router;
