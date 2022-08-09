package models;

/**
 *
 * @author maaschmidt
 */
public class Personagem {
    private int id;
    private String nome;
    private int vida;
    private int agilidade;
    private int inteligencia;
    private int forca;
    private double dinheiro;
    private String caminhoImagem;

    public Personagem(int id, String nome, int vida, int agilidade, int inteligencia, int forca, double dinheiro ,String caminhoImagem) {
        this.id = id;
        this.nome = nome;
        this.vida = vida;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
        this.forca = forca;
        this.dinheiro = dinheiro;
        this.caminhoImagem = caminhoImagem;
    }
    
    public Personagem (){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
       
    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }

    public int getAgilidade() {
        return agilidade;
    }

    public void setAgilidade(int agilidade) {
        this.agilidade = agilidade;
    }

    public int getInteligencia() {
        return inteligencia;
    }

    public void setInteligencia(int inteligencia) {
        this.inteligencia = inteligencia;
    }    

    public int getForca() {
        return forca;
    }

    public void setForca(int forca) {
        this.forca = forca;
    }

    public double getDinheiro() {
        return dinheiro;
    }

    public void setDinheiro(double dinheiro) {
        this.dinheiro = dinheiro;
    }

    public String getCaminhoImagem() {
        return caminhoImagem;
    }

    public void setCaminhoImagem(String caminhoImagem) {
        this.caminhoImagem = caminhoImagem;
    }
        
}
