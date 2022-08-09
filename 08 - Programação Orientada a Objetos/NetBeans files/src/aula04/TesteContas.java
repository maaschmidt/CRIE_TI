package aula04;

import modelos.ContaBanco;
import ferramentas.Entrada;

/**
 *
 * @author maaschmidt
 */
public class TesteContas {

    public static void main(String[] args) {

        ContaBanco objPessoa1 = new ContaBanco();
        objPessoa1.setTitular("Juca Bala");
        objPessoa1.setAgencia("0136");
        objPessoa1.setConta("76346-2");
        objPessoa1.setSaldo(Entrada.leiaDouble("Informe seu saldo"));
        objPessoa1.setChequeEspecial(500);
        objPessoa1.setPix("012345");
        objPessoa1.setSenha("1234");

        ContaBanco objPessoa2 = new ContaBanco();
        objPessoa2.setTitular("Bala Juca");
        objPessoa2.setAgencia("0179");
        objPessoa2.setConta("76446-3");
        objPessoa2.setSaldo(1000);
        objPessoa2.setChequeEspecial(1000);
        objPessoa2.setPix("0123456");
        objPessoa2.setSenha("12345");

        ContaBanco objPessoa3 = new ContaBanco();
        objPessoa3.setTitular("José");
        objPessoa3.setAgencia("0190");
        objPessoa3.setConta("76789-3");
        objPessoa3.setSaldo(3000);
        objPessoa3.setChequeEspecial(1500);
        objPessoa3.setPix("01234567");
        objPessoa3.setSenha("4321");
        
            System.out.println(objPessoa1);
            System.out.println("---------------------");
            System.out.println(objPessoa2);

            System.exit(0);
        
    }
}
