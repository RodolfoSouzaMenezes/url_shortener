import { config } from "config/Constants";
import { Request, Response } from "express";
import shortId from 'shortid'
export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        // Ver se a URL existe
        // Criar Hash para a URL
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // Salvar URL no DB
        // Retornar URL
        res.json({originURL, hash, shortURL})
    }
}