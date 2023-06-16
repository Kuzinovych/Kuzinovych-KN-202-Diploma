const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')

const app = express()

app.listen(3000)

app.use(express.static('css'))
app.use(express.static('scripts'))
app.use(express.static('images'))

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

app.get('/timetable', (req, res) => {
    res.sendFile('./pages/timetable.html', { root: __dirname })
})

app.get('/choose-train-service', (req, res) => {
    res.sendFile('./pages/chooseTrainService.html', { root: __dirname })
})

app.get('/signup', (req, res) => {
    res.sendFile('./pages/signup.html', { root: __dirname })
})

app.get('/edit-personal-info', (req, res) => {
    res.sendFile('./pages/editPersonalInfo.html', { root: __dirname })
})

app.get('/ordered-tickets', (req, res) => {
    res.sendFile('./pages/orderedTickets.html', { root: __dirname })
})

app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname })
})