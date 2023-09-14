const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost} = require("../controllers/post.controller");
const router = express.Router();

// les 4 principe de base pour une requete API

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

// principe bonus

router.patch("/like-post/:id", likePost);

router.patch("/dislike-post/:id", dislikePost);

module.exports = router;
