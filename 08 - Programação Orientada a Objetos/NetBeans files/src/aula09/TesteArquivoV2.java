package aula09;

import ferramentas.Arquivo;

/**
 *
 * @author maaschmidt
 */
public class TesteArquivoV2 {

    public static void main(String[] args) {

        Arquivo objArquivo = new Arquivo("/home/maaschmidt/Desktop/teste.txt");
        boolean retorno = objArquivo.abrirLeitura();
        if (retorno){
            //ler linhas
            String linha;
            do {
                linha = objArquivo.lerLinha();
                if (linha != null) {
                    System.out.println(linha);
                }
            } while (linha != null);         
            objArquivo.fecharArquivo();
        } else {
            System.out.println("Erro");
        }
        
        //Gravar no arquivo
        objArquivo = new Arquivo("/home/maaschmidt/Desktop/nomes.txt");
        retorno = objArquivo.abrirEscrita();
        if (retorno){
            objArquivo.escreverLinha("Nome1");
            objArquivo.escreverLinha("Nome2");
            objArquivo.escreverLinha("Nome3");
            objArquivo.fecharArquivo();
        }
    }
}
