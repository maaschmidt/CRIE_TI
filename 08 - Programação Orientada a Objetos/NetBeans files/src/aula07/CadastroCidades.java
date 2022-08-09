package aula07;

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
    static Cidade[] objCidade = new Cidade[5];
    
    public static void main(String[] args) {
        String nomeCidade;
        for (int i = 0; i < objCidade.length; i++) {
            do {
                nomeCidade = Entrada.leiaString("Nome da cidade");
            } while (cidadeExiste(nomeCidade));
                objCidade[i] = new Cidade(i+1, nomeCidade);
                System.out.println(objCidade[i]);
        }       
        System.exit(0);
    }
    private static boolean cidadeExiste(String cidade){
        for (int i = 0; i < objCidade.length && objCidade[i] != null; i++) {
            if(objCidade[i].getCidade().equalsIgnoreCase(cidade)){
                return true;
            }
        }
        return false;
    }
}

 