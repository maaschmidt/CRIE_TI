package aula05;

//import ferramentas.Entrada;
//import aula04.TesteContas;
//import modelos.ContaBanco;
//
///**
// *
// * @author maaschmidt
// */
//public class TestePix {
//
//    public static void main(String[] args) {
//        ContaBanco [] contas = new ContaBanco[3];
//        
//        ContaBanco objPessoa1 = new ContaBanco("Juca Bala", "0136", "76346-2", 500, 500, "012345");
//        ContaBanco objPessoa2 = new ContaBanco("Bala Juca", "0179", "76446-3", 1000, 1000, "0123456");
//        ContaBanco objPessoa3 = new ContaBanco("José", "0190", "76789-3", 3000, 1500, "01234567");
//        
//        contas[0] = ObjPessoa1;
//        contas[1] = ObjPessoa2;
//        contas[2] = ObjPessoa3;
//        
//        String contaOrigem = Entrada.leiaString("Conta de Origem");        
//        double valorPix = Entrada.leiaDouble("Valor do PIX");
//        String chaveDestino = Entrada.leiaString("PIX de destino");
//        
//        ContaBanco objContaOrigem = localizaContaOrigem(contas, contaOrigem);
//        
//        
//    }
//    
//    private static ContaBanco localizaContaOrigem(ContaBanco [] contas, String conta){
//        for (int i = 0; i < contas.lenght; i++) {
//            if(contas[i].getConta().equals(conta)){
//                return contas[i];
//                break;
//            }
//        }
//        return null;
//    }
//}
