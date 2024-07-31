const express = require('express');
const path = require('path')
const app = express();
const ejs = require('ejs')
const fileUpload = require('express-fileupload')
app.use(fileUpload())
app.use(express.urlencoded({ extended: true })); 
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json()); 


const config = require('./db/config');
const connect =  require('./db/connect')


const home = require ('./controllers/home')
const contact = require ('./controllers/contact')
const about = require ('./controllers/about')
const products = require ('./controllers/products')
const admin = require ('./controllers/admin')
const addProduct = require ('./controllers/addproduct')
const deleteProduct = require ('./controllers/deleteProduct')
const editProduct = require ('./controllers/editProduct')
const productDetail = require ('./controllers/product_detail')
//const error404 = require ('./controllers/404')



app.get('/',home)
app.get('/contact',contact)
app.get('/about',about)
app.get('/products',products)
app.get('/admin',admin)
app.get('/product/:id',productDetail)


app.post('/addProduct',addProduct)
app.post('/deleteProduct',deleteProduct)
app.post('/editProduct',editProduct)



//app.use(error404)
app.listen(4000, ()=>{
    console.log('App listening on port 4000')
    })
    