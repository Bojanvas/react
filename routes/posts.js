var mongoose = require('mongoose');
PostSchema = mongoose.Schema({
    title: String,
    url: String,
    content: String,
    data: { type: Date, default: Date.now }
}, { collection: 'posts' });

Post = mongoose.model('Post', PostSchema);

module.exports = Post;