import express from 'express';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(
  cors({
    origin: ['http://127.0.0.1:3001', 'http://localhost:3001'],
  })
);

app.use(express.json());      // accepteer json als input (body-parser is tegenwoordig overbodig)

const moves = [];             // dit is de 'database'

app.post('/players', (req, res) => {
  console.log('inside players');
  const { whitePlayer, blackPlayer } = req.body;
  res.json({ whitePlayer, blackPlayer });
});

app.post('/move', (req, res) => {
  console.log('inside move')
  const { move } = req.body;
  if (!(/^\d\d-\d\d$/.test(move))) {      // server-side validatie
    res.json({ success: false, nrOfMoves: moves.length })
  } else {
    moves.push(move);
    res.json({ success: true, nrOfMoves: moves.length })
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
