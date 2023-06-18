const express = require('express')
const app = express()
const mysql = require('mysql2'); // подключаем библиотеку mysql
app.all('/', (req, res) => {
console.log("Just got a request!")
res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
