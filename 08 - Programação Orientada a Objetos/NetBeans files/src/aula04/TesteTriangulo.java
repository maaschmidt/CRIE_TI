package aula04;
import ferramentas.Entrada;

/**
 *
 * @author maaschmidt
 */
public class TesteTriangulo {
    public static void main(String[] args) {
        
        AreaTriangulo objTriangulo = new AreaTriangulo();
        
        objTriangulo.setBase(Entrada.leiaDouble("Informe a base do triângulo (metros)"));
        objTriangulo.setAltura(Entrada.leiaDouble("Informe a altura do triângulo (metros)"));
        
        System.out.printf("Area do triângulo: %.2f m²%n", objTriangulo.CalcularArea());
        
        System.exit(0);
    }
}
