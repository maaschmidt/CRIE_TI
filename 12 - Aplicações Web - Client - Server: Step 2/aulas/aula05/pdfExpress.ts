import puppeteer from 'puppeteer';
import express, { Express, Request, Response } from 'express';
import * as fs from 'fs';

const app = express();

const generatePDF = async (req: Request, res: Response) => {

    // Criar uma nova instância de browser
    const browser = await puppeteer.launch();

    // Criar uma nova página
    const page = await browser.newPage();

    // Obter conteúdo HTML do arquivo HTML
    const html = fs.readFileSync('index.html', 'utf-8');
    await page.setContent(html, { waitUntil: 'domcontentloaded' });

    // Para refletir o CSS usado para telas em vez de imprimir
    await page.emulateMediaType('screen');

    // Transformar para PDF
    const pdf = await page.pdf();

    // Fecha a instância do navegador
    await browser.close();

    // Enviar o PDF na resposta
    res.end(pdf);
}

app.use('/', generatePDF);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});