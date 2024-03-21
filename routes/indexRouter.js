const store = [
    {
        "productName": "apple",
        "price": 1.5
    }
]



const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json(store)
})

router.get('/get-all-products', (req, res)=>{
    let allProductName = []
    for(let obj of store){
        allProductName.push(obj.productName)
    }
    res.json(allProductName)
})

// router.get('/get-product:productName', (req, res){

// })



module.exports = router