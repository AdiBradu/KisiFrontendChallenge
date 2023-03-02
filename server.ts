import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.SERVER_PORT, async () => {
  console.log(`Kisi Server running on port ${process.env.SERVER_PORT}`);
});
