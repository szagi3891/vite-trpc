import express from 'express';
import { configureServer } from './server/main';
import path from 'path';

const app = express();

// Serwuj zbudowany frontend
app.use(express.static(path.resolve('./static')));

// API endpoint
const configServer = configureServer(app);

app.use((_req, res) => {
    // Obsługa SPA (React Router itd.)
    res.sendFile(path.resolve('./static/index.html'));
});

app.listen(configServer.port, configServer.callback);