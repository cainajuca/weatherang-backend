const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

// Routes
const postsRoutes = require('./routes/api/posts');

const app = express();

// BodyParser Middleware
app.use(express.json())
// so it can understand json

mongoose.connect(
    MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// User routes
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 3001;

// roda o server
app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
