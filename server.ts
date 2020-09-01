import express from 'express';
import next from 'next';

const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const startServer = async () => {
    await nextApp.prepare();
    const app = express();

    app.get('*', (req, res) => handle(req, res));

    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
};

startServer();
