import express from 'express';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import morgan from 'morgan';

import passport from './config/passport/passport';
import mongoose from 'mongoose';
import hubRouter from './routes/hub/hubRouter';

const app = express();


app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/hub', hubRouter);

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
  }
  
main().catch(err => console.log(err));
  

app.listen(4000, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port 4000');
});
