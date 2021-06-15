var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BidSchema = new Schema(
    {
        //TODO BID MODEL SCHEMA
        // email: { type: String, required: true },
        // password: { type: String, required: true },
        // admin: { type: Boolean, default: false }
    }
);

BidSchema
.virtual('url')
.get(function() {
    return '/bid/' + this._id;
});

// Export model
module.exports = mongoose.model('Bid', BidSchema);