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

/*
router.get('/contato', (req, res)=>{
    res.end("Pagina de CONTATO")
})
*/

router.post('/contato', (req, res)=>{
    //res.end("Pagina de CONTATO")
    let dados = JSON.stringify(req.body)
    //res.end(dados)
    res.end(req.body.email)
    

})

router.post('/receber', (req, res)=>{
    
    res.end("Pagina de RECEBER")
    
})

module.exports = router
