const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const mainRouter = require('./routers/main');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use('/', mainRouter)

app.listen(port, () => {
    console.log('Servidor Funcionando')
})