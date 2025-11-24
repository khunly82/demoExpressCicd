import Express from 'express';

const app = Express();

app.get('/', (_, res) => {
    res.json({ value: process.env.secret, value2: f() })
});

export function f() {
    return 42;
}

app.listen(3000);