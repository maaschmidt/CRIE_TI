package models;

/**
 *
 * @author maaschmidt
 */
public class Inimigo {
    private int id;
    private String nome;
    private int vida;
    private int forca;
    private int municao;
    private int recompensa;
    private String caminhoImagem;

    public Inimigo(int id, String nome, int vida, int forca, int municao,int recompensa, String caminhoImagem) {
        this.id = id;
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.municao = municao;
        this.caminhoImagem = caminhoImagem;
        this.recompensa = recompensa;
    }
    
    public Inimigo() {}

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

    public int getForca() {
        return forca;
    }

    public void setForca(int forca) {
        this.forca = forca;
    }

    public int getMunicao() {
        return municao;
    }

    public void setMunicao(int municao) {
        this.municao = municao;
    }

    public int getRecompensa() {
        return recompensa;
    }

    public void setRecompensa(int recompensa) {
        this.recompensa = recompensa;
    }

    public String getCaminhoImagem() {
        return caminhoImagem;
    }

    public void setCaminhoImagem(String caminhoImagem) {
        this.caminhoImagem = caminhoImagem;
    }
        
}
