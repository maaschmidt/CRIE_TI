package modelos;

/**
 *
 * @author maaschmidt
 */
public class Carro {
    private String marca;
    private Modelo modelo;
    private String cor;
    private int anoModelo;
    private int anoFabricacao;
    private double potencia;
    
//    public Carro(){
//        
//    }
//
//    public Carro(String marca, Modelo modelo, String cor, int anoModelo, int anoFabricacao, double potencia) {
//        this.marca = marca;
//        this.modelo = modelo;
//        this.cor = cor;
//        this.anoModelo = anoModelo;
//        this.anoFabricacao = anoFabricacao;
//        this.potencia = potencia;
//    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Modelo getModelo() {
        return modelo;
    }

    public void setModelo(Modelo modelo) {
        this.modelo = modelo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getAnoModelo() {
        return anoModelo;
    }

    public void setAnoModelo(int anoModelo) {
        this.anoModelo = anoModelo;
    }

    public int getAnoFabricacao() {
        return anoFabricacao;
    }

    public void setAnoFabricacao(int anoFabricacao) {
        this.anoFabricacao = anoFabricacao;
    }

    public double getPotencia() {
        return potencia;
    }

    public void setPotencia(double potencia) {
        this.potencia = potencia;
    }

    @Override
    public String toString() {
        String result;
        result =  ("-------------------");
        result += ("\nMarca: " + marca);
        result += ("\nModelo: " + modelo);
        result += ("\nAno: " + anoFabricacao+"/"+anoModelo);
        result += ("\nCor: " + cor);
        result += ("\nMotor: " + potencia);
        result += ("\n-------------------");
        return result;
    }

}
