import express from "express"; //npm install @types/express --save-dev
import * as bodyParser from "body-parser" //npm install body-parser
import { URLSearchParams } from "url"; //npm install @types/node --save-dev
import fetch from 'node-fetch'; //npm instal node-fetch@2.6.6
import * as xml2js from 'xml2js'; //npm install xml2js
import { Md5 } from 'md5-typescript'; //npm i md5-typescript
import { Frete } from "./models/FreteModel";

let server: express.Application = express();
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());

server.get("/", async function (req, res) {
    let result = await consultaCorreio(req.url);

    res.json(result)
});

server.listen(3000, function () {});

async function consultaCorreio(params: any) {
    const frete = await buscaFretes(Md5.init(params));

    if (frete) {
        return frete;
    } else {
        return (await salvaConsulta(params));
    }
}

const buscaFretes = async (md5: string) => {
    try {
        return await Frete.findOne({ where: { params: md5 } });
    } catch (error) {
        return error;
    }
}

const salvaConsulta = async (queryString: string) => {
    try {
        let url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?' + queryString;

        const response = await fetch(url);
        const xml = await response.text();

        const json: any = await xml2js.parseStringPromise(xml);

        await Frete.sync({ alter: true })
        let consulta: Frete = new Frete();
        consulta.params = Md5.init(queryString);
        consulta.codigo = json.Servicos.cServico[0].Codigo[0];
        consulta.valor = json.Servicos.cServico[0].Valor[0];
        consulta.prazo_entrega = json.Servicos.cServico[0].PrazoEntrega[0];
        consulta.valor_sem_adicionais = json.Servicos.cServico[0].ValorSemAdicionais[0];
        consulta.valor_mao_propria = json.Servicos.cServico[0].ValorMaoPropria[0];
        consulta.valor_aviso_recebimento = json.Servicos.cServico[0].ValorAvisoRecebimento[0];
        consulta.valor_declarado = json.Servicos.cServico[0].ValorValorDeclarado[0];
        consulta.entrega_domiciliar = json.Servicos.cServico[0].EntregaDomiciliar[0];
        consulta.entrega_sabado = json.Servicos.cServico[0].EntregaSabado[0];
        consulta.erro = json.Servicos.cServico[0].Erro[0];
        await consulta.save();
        return consulta;
    } catch (error) {
        return error;
    }

}