package aula03;
import ferramentas.Entrada;


/**
 *
 * @author maaschmidt 
 * 1 - Crie uma classe chamada TestePessoa dentro do pacote que você ja criou; 
 * 2 - Importe para dentro deste mesmo pacote a classe Entrada.java; 
 * 3 - Instancie (declare e inicialize) um objeto do tipo Pessoa;
 * 4 - Através da classe Entrada, preencha os atributos que você definiu para a Pessoa; 
 * 5 - Ao final, sobrescreva a função toString() dentro da classe Pessoa informando todos os atributos da pessoa como saída da função; 
 * 6 - Chame a função toString() da classe Pessoa após a inserção dos dados através da classe Entrada.java
 */
public class TestePessoa {

    public static void main(String[] args) {
        
        Pessoa objPessoa1 = new Pessoa();
        Pessoa objPessoa2 = new Pessoa();

        objPessoa1.setNome(Entrada.leiaString("Digite o nome da pessoa"));
        objPessoa1.setCpf(Entrada.leiaString("CPF de " + objPessoa1.getNome()));
        objPessoa1.setIdade(Entrada.leiaInt("A idade de " + objPessoa1.getNome()));
        objPessoa1.setAltura(Entrada.leiaDouble("A altura de " + objPessoa1.getNome()));
        
        objPessoa2.setNome(Entrada.leiaString("Digite o nome da pessoa"));
        objPessoa2.setCpf(Entrada.leiaString("CPF de " + objPessoa2.getNome()));
        objPessoa2.setIdade(Entrada.leiaInt("A idade de " + objPessoa2.getNome()));
        objPessoa2.setAltura(Entrada.leiaDouble("A altura de " + objPessoa2.getNome()));

        System.out.println(objPessoa1+"\n"+objPessoa2);
        
        if (objPessoa1.getNome().equalsIgnoreCase(objPessoa2.getNome())){
            System.out.println("\nAs pessoas informadas tem nomes iguais");
        } else {
            System.out.println("\nAs pessoas informadas tem nomes diferentes");
        }
        
        if(objPessoa1.getNome().length() > objPessoa2.getNome().length()){
            System.out.println("\n"+objPessoa1.getNome()+" tem o nome com mais caracteres");
        } else if(objPessoa2.getNome().length() > objPessoa1.getNome().length()){
            System.out.println("\n"+objPessoa2.getNome()+" tem o nome com mais caracteres");
        } else {
            System.out.println("\nOs nomes tem o mesmo número de caracteres");
        }

        System.exit(0);
    }
}
