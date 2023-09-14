const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost, getPostsLike, getPostsAlpha, getAuthorsStartingWithA} = require("../controllers/post.controller");
const router = express.Router();

// les 4 principe de base pour une requete API

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

// principe bonus

router.patch("/like-post/:id", likePost);

router.patch("/dislike-post/:id", dislikePost);


// principe de tri

router.get("/sort/likes", getPostsLike);

router.get("/sort/author", getPostsAlpha);

router.get("/authors-starting-with-a", getAuthorsStartingWithA);



module.exports = router;


