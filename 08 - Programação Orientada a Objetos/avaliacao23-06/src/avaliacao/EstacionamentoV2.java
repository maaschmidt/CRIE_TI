package avaliacao;

import ferramentas.Entrada;

/**
 *
 * @author maaschmidt
 */
public class EstacionamentoV2 {
    public static void main(String[] args) {
        double tempo = Entrada.leiaDouble("Informe o tempo permanecido\n"
                + "Separado por apenas 1 ponto (ex.: horas.minutos)");
        int hora = 0;
        double minuto = 0;
        
        for (int i = 0; i < tempo; i++) {
            hora++;
            tempo --;
        }
        minuto = tempo * 100;
        
        double valor = 0;
        if (hora >= 2){
            valor = 3.5 + ((minuto / 0.6)/100)+ hora - 2;
        } else if (hora == 1) {
            valor = 2 + ((minuto / 0.6)/100) * 1.5;
        } else if (hora == 0){
            valor = ((minuto / 0.6)/100) * 2;
        }
        
        System.out.printf("Valor a pagar: R$%.2f\n", valor);
        System.exit(0);
    }
 
}