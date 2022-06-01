const express = require('express')
const router = express.Router()


router.get('/camisetas', (req, res)=>{
    res.render('produtos/camisetas')
})

router.get('/calcas', (req, res)=>{
    res.render('produtos/calcas')
})

router.get('/sapatos', (req, res)=>{
    res.render('produtos/sapatos')
})

router.get('/sapatos/:id2', (req, res)=>{
    res.end(req.params.id2)
    //res.end("Pagina de SAPATOS")
})

module.exports = router
