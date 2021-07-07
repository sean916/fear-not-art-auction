var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BidSchema = new Schema(
    {
        //TODO BID MODEL SCHEMA
        Amount: { type: Number },
        Item: { type: Schema.Types.ObjectId, ref: 'Item' },
        User: { type: Schema.Types.ObjectId, ref: 'User' }
    }
);

BidSchema
.virtual('url')
.get(function() {
    return '/bid/' + this._id;
});

// Export model
module.exports = mongoose.model('Bid', BidSchema);