package modelos;

/**
 *
 * @author maaschmidt
 */
public class Aluno {
    public String nome;
    public int idade;
    public String email;
    public String fone;
    
    public void fazAniversario() {
        idade++;
    }
    
    public void imprimir(){
        System.out.println("O aluno " + nome+" tem "+ idade +" seu email é "+ email+" e seu telefone é "+fone);
    }
}

