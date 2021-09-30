import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();
const app = express();

const CONNECTION_URL = 'mongodb+srv://azurelle-dashboard:123123123@cluster0.jgioi.mongodb.net/react-pratice1?retryWrites=true&w=majority'

app.use('/posts', postRoutes);
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended:true}));
app.use(cors());

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
.catch((error) => console.log(error.message));