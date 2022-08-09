package aula02;
/**
 *
 * @author maaschmidt
 */
public class CompararString { 
    public static void main(String[] args) {
        String nome1 = "Texto",
               nome2 = "TEXTO";
        
        if (nome1.equals(nome2)){
            System.out.println("Os textos são iguais indiferente da capitalização");
        } else if (nome1.equalsIgnoreCase(nome2)) {
            System.out.println("Os textos são iguais mas tem capitalizações diferentes");
        } else if (!nome1.equals(nome2)){
            System.out.println("Os textos são diferentes");
        }
        System.exit(0);
    }
}
