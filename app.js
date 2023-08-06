const express = require('express');
const app = express()

const productRoutes = require('./routes/products')

const orderRoutes = require('./routes/order')

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)


module.exports = app;