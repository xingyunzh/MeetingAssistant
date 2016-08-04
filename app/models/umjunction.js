var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var umjunctionSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,

        ref: 'user'
    }
});

module.exports = mongoose.model('UMJunction', umjunctionSchema);
