const express = require('express')
const router = express.Router()

router.get('/camisetas', (req, res)=>{
    res.end("Pagina de CAMISETAS")
})

router.get('/calcas', (req, res)=>{
    res.end("Pagina de CALCAS")
})

router.get('/sapatos', (req, res)=>{
    res.end("Pagina de SAPATOS")
})

router.get('/sapatos/:id2', (req, res)=>{
    res.end(req.params.id2)
    //res.end("Pagina de SAPATOS")
})

module.exports = router
