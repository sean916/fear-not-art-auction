var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema(
    {
        Name: { type: String },
        Item: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
        
    }
);

CategorySchema
.virtual('url')
.get(function() {
    return '/category/' + this._id;
});

// Export model
module.exports = mongoose.model('Category', CategorySchema);