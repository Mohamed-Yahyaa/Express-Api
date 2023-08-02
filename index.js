
import  express from 'express';

import bodyParaser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParaser.json());

app.use('/users' ,usersRoutes);

app.get('/' , (req ,res) =>{

console.log('[test]!');

res.send('Hello Api');

});

app.listen(PORT ,() =>console.log(`Server Running on port: http://localhost:${PORT}`) );