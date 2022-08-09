package modelos;

/**
 *
 * @author maaschmidt
 */
public class Cliente {

    private String nome;
    private String cpf;
    private String telefone;
    private String endereco;
    private int idade;
    private char sexo;

    public Cliente() {

    }

    public Cliente(String nome, String cpf, String telefone, String endereco, int idade, char sexo) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = endereco;
    this.idade = idade;
    this.sexo = sexo;
}

public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }
    
    @Override
    public String toString() {
        return "Nome: "+ this.nome + "\n"
                + "CPF: "+ this.cpf + "\n"
                + "Telefone: "+ this.telefone + "\n"
                + "Endereço: "+ this.endereco + "\n"
                + "Idade: "+ this.idade + "\n"
                + "Sexo: "+ this.sexo + "\n"
                + "------------------------";
    }    
    
}
