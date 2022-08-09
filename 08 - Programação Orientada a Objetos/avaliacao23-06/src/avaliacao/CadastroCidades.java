package avaliacao;

import ferramentas.Entrada;
import modelos.Cidade;

/**
 * Crie uma classe chamada Cidades (ela deverá conter um Id e uma Nome). Após,
 * crie um vetor de 5 posições que armazene Cidades.
 *
 * Você deverá solicitar ao usuário que informa o nome de alguma cidade (deverá
 * ser utilizada a classe Entrada para isso), você deverá utilizar este nome
 * para preencher um novo objeto da classe Cidade e então você deverá inserir
 * esta cidade dentro da próxima posição disponível no vetor, até o vetor ficar
 * preenchido, o Id neste caso será o número do índice do vetor + 1 (para o
 * primeiro registro não entrar com o Id = 0).
 *
 * Importante: Você não poderá permitir que a mesma cidade seja inserida mais de
 * uma vez dentro do vetor.
 *
 * @author maaschmidt
 */
public class CadastroCidades {

    public static void main(String[] args) {
        Cidade[] objCidade = new Cidade[5];

        for (int i = 0; i < objCidade.length; i++) {
            objCidade[i] = new Cidade(i+1, Entrada.leiaString("Nome da cidade"));
//            for (int j = 0; j < objCidade.length; j++) {
//                if(cidade.equalsIgnoreCase(objCidade[j].getCidade())){
//                    cidade = Entrada.leiaString("Cidade cadastrada\n"
//                            + "Informe outra cidade");
//                } else {
//                    objCidade[i] = new Cidades(i+1, cidade);
//                }
//------------------------------------------------------------------------
//                if (!objCidade[j].getCidade().equalsIgnoreCase(cidade)){
//                    objCidade[i] = new Cidades(i+1, cidade);
//                } else {
//                    cidade = Entrada.leiaString("Cidade ja cadastrada\n"
//                            + "informe outra cidade");
//                }
//            }
        }
        for (int i = 0; i < objCidade.length; i++) {
            System.out.println(objCidade[i]);
        }
        System.exit(0);
    }
}