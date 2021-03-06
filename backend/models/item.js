var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
    {
        LotNum: { type: String },
        Title: { type: String },
        Description: { type: String },
        Condition: { type: String },
        LowEst: { type: String },
        HighEst: { type: String },
        StartPrice: { type: Number },
        Artist: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
        Category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
        Bid: [{ type: Schema.Types.ObjectId, ref: 'Bid' }],
        imgURL: [{ type: String }]
        
    }
);

ItemSchema
.virtual('url')
.get(function() {
    return '/item/' + this._id;
});

// Export model
module.exports = mongoose.model('Item', ItemSchema);