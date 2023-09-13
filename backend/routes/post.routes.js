const express = require('express');
const router = express.Router();


// les 4 principe de base pour une requete API

router.get ("/", (req, res) => {
    res.json({message: 'Salut tout le monde'});
});

router.post ("/", (req, res) => {
    // console.log(req.body);
    res.json({message: req.body.message});
});

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