const express = require('express');
const app = express();

appp.use(express.json());

const app = express();

app.get('/', (req, res) => {
    res.send()
});

app.post('/api/guitars',[validateGuitars] (req, res) => {
    console.log(req.body.newGuitarBrand);
    res.send(req.body);
});




app.listen(5000, () => console.log('Server is running'));

//middleware example
function validateGuitars(req, res, next){

    if(guitars.includes(req.body.newGuitarBrand)){
        return res.send({error: 'Cant get'})
    }
}