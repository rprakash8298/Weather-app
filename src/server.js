const path = require('path')
const map = require('./map')
const weather = require('./weather')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    if (!req.query.place) {
        return res.send({
         error:'please fill a valid location'
     })
  }

    map(req.query.place, (error, data = {}) => {
        if (error) {
            res.send({error})
        }
        
    weather(data.latitude, data.longitude, (error, forecastData) => {
        res.send({
            forecastData,
            location:data.location
        })
})
})
})
var port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('app is running')
})