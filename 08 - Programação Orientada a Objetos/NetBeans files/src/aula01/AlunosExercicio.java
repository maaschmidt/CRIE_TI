package aula01;

import modelos.Aluno;

/**
 *
 * @author maaschmidt
 */
public class AlunosExercicio {
    public static void main(String[] args) {
        Aluno aluno1 = new Aluno();
        aluno1.idade = 32;
        aluno1.nome = "Juca";
        aluno1.email = "juca@email.com";
        aluno1.fone = "(51)555-555-555";
        
        Aluno aluno2 = new Aluno();
        aluno2.idade = 25;
        aluno2.nome = "Bala";
        aluno2.email = "bala@email.com";
        aluno2.fone = "(51)999-999-999";
        
        //o metodo imprimir deve mostrar o nome e a idade dos alunos juntos
        aluno1.imprimir();
        aluno2.imprimir();
        
        aluno2.fazAniversario();
        
        aluno2.imprimir();
        
        System.exit(0);
    }
}