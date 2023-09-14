const PostModel = require("../models/post.model");

// Methode GET
module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

// Method Post
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Merci d'ajouter un message" });
  }

  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

// Methode PUT
module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Post non trouvé" });
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  res.status(200).json(updatePost);
};

// Methode DELETE
module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findByIdAndDelete(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Post non trouvé" });
  }

  res.status(200).json({ message: "Post id : " + post + " supprimé" });
};

// Method Liker

module.exports.likePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.dislikePost = async (req, res) => {
    try {
      await PostModel.findByIdAndUpdate(
        req.params.id,
        { $pull: { likers: req.body.userId } },
        { new: true }
      ).then((data) => res.status(200).send(data));
    } catch (err) {
      res.status(400).json(err);
    }
  };
