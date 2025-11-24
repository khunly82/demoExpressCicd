import Express from 'express';

const app = Express();

app.get('/', (_, res) => {
    res.json({ value: process.env.secret })
});

app.listen(3000);