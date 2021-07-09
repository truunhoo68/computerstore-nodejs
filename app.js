import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import expressValidator from 'express-validator'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(expressValidator());
//Connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(()=>{
    console.log(`Database connected`)
});
mongoose.connection.on('Error', err =>{
    console.log(`Data connect failed, ${err.message}`);
})

const port = process.env.PORT || 8000;
// Routes Middlewares
app.use('/api',productRoutes);
app.use('/api',categoryRoutes);
app.use('/api', userRoutes);
app.use('/api',authRoutes);


app.listen(port, () => {{console.log('Server is running on port',port)} })