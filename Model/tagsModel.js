const mongoose = require('mongoose')

const TagsSchema = new mongoose.Schema({
   tags:{type:String}
})

const TagsSchemaData = mongoose.model('TagsSchemaData', TagsSchema)
module.exports = TagsSchemaData