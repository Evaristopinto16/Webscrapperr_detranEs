const express = require("express")
const multaApi3 = require("./ap3")
const ipvaApp = require("./app")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req, res)=> {
    res.json({true: "true"})
})
app.post("/multa", async(req, res)=>{
    let placa = req.body.placa  //'PPU5D60'
    let renavam = req.body.renavam //'1122749438'

    let result =await  multaApi3(placa, renavam)

    res.send(result)

})
app.post("/ipva", async(req, res)=>{
    //'PPU5D60'
    let placa = req.body.placa  //'PPU5D60'
    let renavam = req.body.renavam //'1122749438'

    let result =await  ipvaApp(placa, renavam)

    res.send(result)

})

app.listen(3000, ()=>{
    console.log('servidor no arr 3000')
})