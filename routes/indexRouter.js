const express = require('express')
const router = express.Router()

const produtosRouter = require('./produtosRouter')

router.use('/produtos', produtosRouter)

router.get('/', (req, res)=>{
    //res.end("Index")
    res.render('index')
})

router.get('/produtos', (req, res)=>{
    //res.end("Pagina de PRODUTOS")
    res.render('produtos')
})

router.get('/servicos', (req, res)=>{
    res.end("Pagina de SERVICOS")
})


router.get('/contato', (req, res)=>{
    res.end("Pagina de CONTATO")
})


router.post('/contato', (req, res)=>{
    //res.end("Pagina de CONTATO")
    let dados = JSON.stringify(req.body)
    //res.end(dados)
    res.end(dados)


})

router.patch('/contato', (req, res)=>{
    res.end("Pagina de CONTATO")
})


router.post('/imc', (req, res)=>{
    let imc=req.body.peso/(req.body.altura*req.body.altura)
    //res.end("O IMC calculado é:  "+imc)
    res.render('imc/resultado',{'resultado':imc})  
})

router.get('/imc', (req, res)=>{
    res.render('imc/formulario')    
})

module.exports = router
