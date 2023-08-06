const express = require('express');
const app = express()

const productRoutes = require('./routes/products')

app.use('./', productRoutes)

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works'
//     })
// })

module.exports = app;