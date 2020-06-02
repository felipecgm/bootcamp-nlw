import express from 'express';

const app = express();

app.get('/users', (requeste, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Felipe',
        'Marcio',
        'Alvin'
    ]);
});

app.listen(3333);
