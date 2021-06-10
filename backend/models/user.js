var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        admin: { type: Boolean, default: false }
    }
);

UserSchema
.virtual('url')
.get(function() {
    return '/user/' + this._id;
});

// Export model
module.exports = mongoose.model('User', UserSchema);