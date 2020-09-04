const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

router.get('/', async (req, res) => {
   try{
       const Posts = await this.post.find();
       res.json(Posts);

   } catch(err){
       res.json({message:err});
   }

});

router.post('/', async (req, res) => {
    const post = new Posts({
    title: req.body.title,
    description: req.body.description
    });

try{
const savedPosts = await Post.save();
res.json(savedPosts);
} catch (err) {
  res.json ({ message: err});

}
});

router.get('/:postId', async (req, res) => {
try{
const post = await Post.findById(req.params.postId);
res.json(post);
}catch(err){
    res.json({ message: err});
}
});

router.delete('/:postId', async (req,res) => {
try{
const removePost = await Posts.remove({_id: req.params.postId});
res.json(removedPost);
} catch(err) {
    res.json ({ message: err});
}
});

router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Posts.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatedPost);
    }   catch(err) {
        res.json({ message: err});
    }
})

module.exports = router;