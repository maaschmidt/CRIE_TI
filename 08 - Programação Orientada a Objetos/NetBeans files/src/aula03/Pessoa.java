package aula03;

/**
 *
 * @author maaschmidt
 */
public class Pessoa {

    private String nome;
    private String cpf;
    private int idade;
    private double altura;

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

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }
    
    @Override
    public String toString() {
        return ("Nome: " + nome +""
                + "\nCPF: " + cpf +""
                + "\nIDADE: " + idade +""
                + "\nALTURA: " + altura);
             
    }
}
