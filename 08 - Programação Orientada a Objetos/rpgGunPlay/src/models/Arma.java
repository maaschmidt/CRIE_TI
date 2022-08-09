package models;

/**
 *
 * @author maaschmidt
 */
public class Arma {
    private int PersonagemID;
    private String nome;
    private int municao;
    private int dano;
    private String caminhoImagem;

    public Arma(int PersonagemID, String nome, int municao, int dano, String caminhoImagem) {
        this.PersonagemID = PersonagemID;
        this.nome = nome;
        this.municao = municao;
        this.dano = dano;
        this.caminhoImagem = caminhoImagem;
    }

    public Arma() {}

    public int getPersonagemID() {
        return PersonagemID;
    }

    public void setPersonagemID(int PersonagemID) {
        this.PersonagemID = PersonagemID;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
            
    public int getMunicao() {
        return municao;
    }

    public void setMunicao(int municao) {
        this.municao = municao;
    }

    public int getDano() {
        return dano;
    }

    public void setDano(int dano) {
        this.dano = dano;
    }

    public String getCaminhoImagem() {
        return caminhoImagem;
    }

    public void setCaminhoImagem(String caminhoImagem) {
        this.caminhoImagem = caminhoImagem;
    }
    
}
