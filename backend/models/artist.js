var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtistSchema = new Schema(
    {
        Name: { type: String },
        Item: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
        
    }
);

ArtistSchema
.virtual('url')
.get(function() {
    return '/artist/' + this._id;
});

// Export model
module.exports = mongoose.model('Artist', ArtistSchema);