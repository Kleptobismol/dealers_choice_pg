const express = require('express');
const { db, syncAndSeed, models: { Hand } } = require('./db')
const { frontPage, handPage } = require('./page')
const path = require('path');

const app = express();

app.use(express.static('resources'))

app.get('/styles.css', (req, res) => res.sendFile(path.join(__dirname, 'styles.css')));

app.get('/', async(req, res) => {
    try{
        const hands = await Hand.findAll();
        res.send(frontPage(hands))
    }
    catch(ex) {
        console.log(ex)
    }
}) 

app.get('/:id', async(req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        const hand =  await Hand.findOne({
            where: { id }
        })
        res.send(handPage(hand))
    }
    catch(ex) {
        next(ex)
    }
})

const init = async() => {
    await db.authenticate();
    await syncAndSeed();
    const port = (process.env.port || 3000)
    app.listen(port, () => console.log(`listening on port ${port}`));
}

init();