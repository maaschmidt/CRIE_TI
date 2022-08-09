package modelos;

/**
 *
 * @author maaschmidt
 */
public class Usuario {
    
    private int id;
    private String nome;
    private String login;
    private String pass;
    
    public Usuario(int id, String nome, String login, String pass){
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.pass = pass;
    }

    public Usuario() {
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

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

}