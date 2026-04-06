import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import cloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoutes.js';


dotenv.config(); 

// App configuration
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();


// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
  res.send("API is working");
});

// Start server
app.listen(port, () => console.log('Server is running on PORT: ' + port));
