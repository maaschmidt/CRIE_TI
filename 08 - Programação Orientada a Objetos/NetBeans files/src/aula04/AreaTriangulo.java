package aula04;

/**
 *
 * @author maaschmidt
 */
public class AreaTriangulo {
    private double base;
    private double altura;

    public double getBase() {
        return base;
    }

    public void setBase(double base) {
        this.base = base;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }
    
    protected double CalcularArea(){
        return base * altura / 2;
    }
}
