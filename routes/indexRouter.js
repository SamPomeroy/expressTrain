[
    {
        "name": "apple",
        "price": 1.5
    }
]



const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json({message: 'you are at the route'})
})






module.exports = router