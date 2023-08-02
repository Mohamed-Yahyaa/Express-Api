import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Tony",
        lastName: 'Soprano',
        work: "Boos"
    },
    {
        firstName: "Selveo",
        lastName: 'Dante',
        work: "Capo"
    },
    {
        firstName: "Paulie",
        lastName: 'Psaycho',
        work: "Capo 2"
    },

];
router.get('/' ,(req,  res) =>{

  console.log(users);

    res.send(users);
});

export default router ;


