package aula15;

public abstract class Veiculo {
    private int quantRodas;
    private String cor;
    private String marca;

    public int getQuantRodas() {
        return quantRodas;
    }

    public void setQuantRodas(int quantRodas) {
        this.quantRodas = quantRodas;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

}
