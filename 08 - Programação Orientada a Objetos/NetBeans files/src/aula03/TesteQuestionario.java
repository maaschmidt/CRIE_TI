package aula03;
import modelos.Questionario;
import ferramentas.Entrada;

/**
 *
 * @author maaschmidt
 */
public class TesteQuestionario {

    public static void main(String[] args) {
        Questionario[] vetorQuestoes = new Questionario[3];

        Questionario objQuestao = new Questionario();
        objQuestao.setPergunta("QUESTÃO 1\n9! = ?");
        objQuestao.setRespostaA("A) 9");
        objQuestao.setRespostaB("B) 362.880");
        objQuestao.setRespostaC("C) 362.280");
        objQuestao.setRespostaCorreta('B');
        vetorQuestoes[0] = objQuestao;

        Questionario objQuestao2 = new Questionario();
        objQuestao2.setPergunta("QUESTÃO 2\n5 + (2 * 10) - 15  = ?");
        objQuestao2.setRespostaA("A) 10");
        objQuestao2.setRespostaB("B) 55");
        objQuestao2.setRespostaC("C) 30");
        objQuestao2.setRespostaCorreta('A');
        vetorQuestoes[1] = objQuestao2;

        Questionario objQuestao3 = new Questionario();
        objQuestao3.setPergunta("QUESTÃO 3\n5 + 2 * 10 - 15 = ?");
        objQuestao3.setRespostaA("A) 55");
        objQuestao3.setRespostaB("B) 30");
        objQuestao3.setRespostaC("C) 10");
        objQuestao3.setRespostaCorreta('C');
        vetorQuestoes[2] = objQuestao3;

        realizarQuestionario(vetorQuestoes);

        System.exit(0);
    }

    private static void realizarQuestionario(Questionario questao[]) {
        char resp[]=new char[questao.length];
        int acerto = 0;
        for (int i = 0; i < questao.length; i++) {
            resp[i] = Entrada.leiaChar(questao[i].realizarPergunta());
            resp[i] = Character.toUpperCase(resp[i]);
        }
        for (int i = 0; i < resp.length; i++) {
            if (resp[i] == questao[i].getRespostaCorreta()) {
                System.out.println((i + 1) +") Parabéns, você acertou!");
                acerto++;
            } else {
                System.out.println((i + 1) +") Você errou!");
            }
        }
        System.out.println("\nVocê acertou "+acerto+" questões de "+questao.length);
    }
}
