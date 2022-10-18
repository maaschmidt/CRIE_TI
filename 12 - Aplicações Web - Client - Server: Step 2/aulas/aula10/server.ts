import express, { Express, NextFunction, Request, Response } from 'express';
import fileUpload, { UploadedFile } from 'express-fileupload'

const app= express();

app.use(fileUpload());
app.use('/public', express.static('public'));
const port : number = 3000;

app.post('/myfileupload', function(req: Request, res: Response) {
  if(!req.files || Object.keys(req.files).length === 0){
    return res.status(400).json('No files were uploaded')
  } 
  
  let arquivo : UploadedFile = req.files.arquivo as UploadedFile;
  let limit = 2 * 1024 * 1024;

  if (arquivo.mimetype != 'image/png'){
    return res.status(400).json('Arquivo inválido')
  }

  if(arquivo.size > limit){
    return res.status(400).json(`Limit de ${limit} bytes`);
  }

  let fileName: string = `public/${arquivo.name}`

  arquivo.mv(fileName, function(err){
    if(err){
      return res.status(500).send(err);
    }
    console.log(req.files?.arquivo);
    res.redirect(fileName);
  })
})

app.listen(port, ()=> {
  console.log(`Servidor rodando na porta ${port}`)
})