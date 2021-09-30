import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/UserRoutes.js'


dotenv.config();
const app = express();

const CONNECTION_URL = 'mongodb+srv://team14:team14@cluster0.dowl8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended:true}));
app.use(cors());

//add routes after cors(),
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
.catch((error) => console.log(error.message));