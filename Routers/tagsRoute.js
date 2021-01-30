const express = require('express')
const router = express.Router()

// Tags Schema Data
const TagsSchemaData = require('../Model/tagsModel')


// Add To Cart 
router.post('/add-tags', async(req, res) => {
   console.log(req.body.tags)
   try {
      const data = new TagsSchemaData({tags:req.body.tags})
      await data.save()
      res.send({data, success:"Product Is Successfully Added"})
   } catch (error) {
      res.status(400).send(error)
   }
})

// Get Cart Product
router.get('/get-tags', async(req, res) => {
   try {
      const data = await TagsSchemaData.find()
      res.send(data)
   } catch (error) {
      res.status(400).send(error)
   }
})


module.exports = router