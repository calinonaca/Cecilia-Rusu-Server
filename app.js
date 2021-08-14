import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const CONNECTION_URL = `mongodb+srv://ceciliarusu:6785807653@ceciliarusu.votuk.mongodb.net/CeciliaRusu?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

const app = express();



app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);