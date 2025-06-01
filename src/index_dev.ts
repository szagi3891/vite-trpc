import ViteExpress from "vite-express";
import { configureServer } from "./server/main";
import path from 'path';
import { fileURLToPath } from 'url';
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = path.join(__dirname, './vite.config.ts');

ViteExpress.config({
    viteConfigFile: config,
});

const app = express();
const configServer = configureServer(app);

ViteExpress.listen(app, configServer.port, configServer.callback);


