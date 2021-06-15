var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
    {
        // TODO ITEM MODEL SCHEMA
        // email: { type: String, required: true },
        // password: { type: String, required: true },
        // admin: { type: Boolean, default: false }
    }
);

ItemSchema
.virtual('url')
.get(function() {
    return '/item/' + this._id;
});

// Export model
module.exports = mongoose.model('Item', ItemSchema);