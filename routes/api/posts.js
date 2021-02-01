const express = require('express');
const router = express.Router();

// weather's Model
const Posts = require('../../models/Posts');

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        if(!posts) throw Error('Cannot GET: Histórico vazio.');
        res.status(200).json(posts)
    } catch(err) {
        res.status(400).json({ msg: err.message })
    }
});

router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);

    try {
        const post = await newPost.save();
        if(!post) throw Error('Erro ao postar weather.')

        res.status(200).json(post);
    } catch(err) {
        res.status(400).json({ msg: err.message })
    }

});

router.delete('/', async (req, res) => {
    try {
        const posts = await Posts.remove();
        if(!posts) throw Error('Cannot DELETE: Histórico vazio.');
        res.status(200).json( { success: true } )
    } catch(err) {
        res.status(400).json({ msg: err.message })
    }
});

module.exports = router;