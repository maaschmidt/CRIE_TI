package aula04;
import ferramentas.Entrada;

/**
 *
 * @author maaschmidt
 * 1 - Crie uma classe contendo o método "static void main"
   2 - Dentro desta mesma classe crie um método que calcula a área de um quadrado e retorna um double com o valor da área
   3 - Dentro do método "main", utilize a classe Entrada para capturar dois valores de entrada do usuário
   4 - Passe os dois valores obtidos, como parâmetros para o método que calcula a área do quadrado
   5 - Apresente o resultado obtido da função
 */

public class TesteArea {
    
    public static void main(String[] args) {
        double largura = Entrada.leiaDouble("Informe a largura (metros)");
        double altura = Entrada.leiaDouble("Informe a altura (metros)");
        
        System.out.printf("%.2fm²%n", calculaArea(largura, altura));
        
        System.exit(0);
    }
    
    private static double calculaArea(double larg, double alt){
        return larg * alt;
    }
}
