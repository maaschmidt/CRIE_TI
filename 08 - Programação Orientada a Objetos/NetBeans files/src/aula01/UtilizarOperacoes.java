package aula01;

/**
 *
 * @author maaschmidt
 */
public class UtilizarOperacoes {
    public static void main(String[] args) {
        int var1 = 30;
        int var2 = 28;
        
        Operacoes operacoes = new Operacoes();
        
        int resultado = operacoes.somar(var1, var2);
        
        System.out.println(resultado);
    }
}