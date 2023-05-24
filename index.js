const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('public/index.html',{root: __dirname});
})

app.get('/public/:nomFichier', (req,res) => {
  res.sendFile("public/"+req.params.nomFichier,{root: __dirname});
});

app.get('/casse-brique',(req,res) => {
  res.sendFile("public/casse-brique.html",{root: __dirname});
})

app.listen(port, () => {
  console.log(`On`)
});