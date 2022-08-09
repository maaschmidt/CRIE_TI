package aula04;
import ferramentas.Entrada;

/**!QFV9%h3$*up5wn
 *
 * @author maaschmidt
 */
public class TesteRetangulo {
    public static void main(String[] args) {

    AreaRetangulo objArea = new AreaRetangulo();
    
    objArea.setBase(Entrada.leiaDouble("Informe o tamanho da base(metros)"));
    objArea.setAltura(Entrada.leiaDouble("Informe o tamanho da altura(metros)"));
    
    System.out.printf("Area do retângulo: %.2f m²%n", objArea.CalcularArea());
    
    System.exit(0);
    }
}