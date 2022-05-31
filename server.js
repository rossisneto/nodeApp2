if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

//Importar os modulos
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//Configurações de arquivos estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//Configurar view engine
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.set('layout','layouts/layout') //Alterando a localização de layout.ejs
app.use(expressLayouts)

//Importar router
const indexRouter= require('./routes/indexRouter')

//Configurar rota
app.use('/', indexRouter)

//Inicializar o serviço
app.listen(process.env.PORT,console.log("Servidor iniciado"))