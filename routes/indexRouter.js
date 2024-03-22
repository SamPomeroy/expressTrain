const store = [
    {
        "name": "apple",
        "price": 1.5
    }
]



const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json(store)
})

router.get('/get-all-products', (req, res)=>{
    let allProducts = []
    for(let obj of store){
        allProducts.push(obj.name)
    }
    res.json(allProducts)
})

router.get('/get-product/:name', (req, res)=>{
    let search = req.params
    let itemSearch
    for(let item of store){
        console.log(search.name)
        if(search.name === item.name){
            itemSearch = item.name
        }
    }
    if(!itemSearch){
        res.end("item not found")
    }else{
        res.json(itemSearch)
    }
})

router.get("/create-product", (req, res)=>{
    let existingItem
    for(let object of store){
        if(object.name === req.body.name){
            existingItem = true
            break
        }
    }
    if(existingItem){
        res.end("existing item")
    }else{
        store.push({
            name:req.body.name,
            price:req.body.price
        })
        res.json({
            data:store,
            message:"Product added"
        })
    }
})

module.exports = router