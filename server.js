const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 2400;


const players = {
    'kobe': {
        'rings': 6,
        'teams': 'Lakers',
        'nicknames': 'Black Mamba'
    },
    'kg': {
        'rings': 1,
        'teams': 'Timberwolves, Celtics, Brooklyn',
        'nicknames': 'Big Ticket, Da Kid'
    },
    'unknown': {
        'rings': 'unknown',
        'teams': 'unknown',
        'nicknames': 'unknown'
    }

}

app.get('/', (req, rep) => {
    rep.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, rep) => {

    rep.json(players)
})

app.get('/api/:name', (req, rep) => {
    const playerName = req.params.name;
    console.log(players[playerName])

    if (players[playerName]) {
        rep.json(players[playerName])
    } else {
        rep.json('unknown')
    }
})



app.listen(PORT, () => {
    console.log('Listening to 24 hrssss, neva the righttt timeee to goooo')
})