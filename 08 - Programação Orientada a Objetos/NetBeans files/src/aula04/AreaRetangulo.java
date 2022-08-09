package aula04;

/**
 *
 * @author maaschmidt
 */
public class AreaRetangulo {
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
    
    public double CalcularArea (){
        return base * altura; 
    }
    
}
