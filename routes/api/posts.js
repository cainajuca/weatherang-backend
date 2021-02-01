const express = require('express');
const router = express.Router();

// posts Model
const Posts = require('../../models/Posts');

// @routes GET api/posts
// @desc Get All post
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        if(!posts) throw Error('No Items');
        res.status(200).json(posts)
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes POST api/posts
// @desc Create Sn post
router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);

    try {
        const post = await newPost.save();
        if(!post) throw Error('Someting went wrong while saving the post.')

        res.status(200).json(post);
    } catch(err) {
        res.status(400).json({ msg: err })
    }

});

// @routes DELETE api/posts
// @desc Delete all post
router.delete('/', async (req, res) => {
    try {
        const posts = await Posts.remove();
        if(!posts) throw Error('No weather found.');
        res.status(200).json( { success: true } )
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

module.exports = router;