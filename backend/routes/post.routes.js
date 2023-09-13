const express = require('express');
const { setPosts, getPosts } = require('../controllers/post.controller');
const router = express.Router();


// les 4 principe de base pour une requete API

router.get ("/", getPosts);

router.post ("/", setPosts);

router.put('/:id', (req, res) => {
    res.json({ messageId: req.params.id });
}); 

router.delete('/:id', (req, res) => {
    res.json({ message: 'Post supprimé id : ' + req.params.id });
});


// principe bonus

router.patch('/like-post/:id', (req, res) => {
    res.json({ message: 'Post liké : id : ' + req.params.id });
});

router.patch('/dislike-post/:id', (req, res) => {
    res.json({ message: 'Post disliké : id : ' + req.params.id });
});



module.exports = router;