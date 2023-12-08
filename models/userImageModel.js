const { model, Schema } = require('mongoose')

const user_image_schema = new Schema({

    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    image_url: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = model('user_images', user_image_schema)