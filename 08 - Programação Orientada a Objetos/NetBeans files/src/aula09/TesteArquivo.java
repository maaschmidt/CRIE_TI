package aula09;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

/**
 *
 * @author maaschmidt
 */
public class TesteArquivo {

    public static void main(String[] args) {
        String linha;
        try {
//            Criar Arquivo
//            FileWriter fileWriter = new FileWriter("/home/maaschmidt/Desktop/teste.txt");
//            BufferedWriter bufferWriter = new BufferedWriter(fileWriter);
//            bufferWriter.write("Marcel\n");
//            bufferWriter.write("Ariele\n");
//            bufferWriter.write("Juca\n");
//            bufferWriter.write("Bala\n");
//            bufferWriter.close();

            //Ler Arquivo
            FileReader fileReader = new FileReader("/home/maaschmidt/Desktop/teste.txt");
            BufferedReader bufferReader = new BufferedReader(fileReader);
            do {
                linha = bufferReader.readLine();
                if (linha != null){
                    System.out.println(linha);
                }
            }
            while (linha != null) ;
        } catch (IOException ex) {
            System.out.println("Erro ao criar arquivo:" + ex.getMessage());
        }
    }
}
