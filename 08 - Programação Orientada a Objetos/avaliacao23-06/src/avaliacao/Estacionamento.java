package avaliacao;

import ferramentas.Entrada;

/**
 * FUP que considere um parque de estacionamento que pratica os preços
 * seguintes:
 * 
 * • primeira hora: R$ 2,00
 * • segunda hora: R$ 1,50
 * • a partir da segunda hora: R$ 1,00 por hora
 *
 * O tempo de permanência no parque é contabilizado em horas e minutos. Por
 * exemplo, se um veículo permanecer 2 horas e 30 minutos no parque, pagará R$ 2
 * (primeira hora) + R$ 1,50 (segunda hora) + R$ 0,50 (30 minutos a R$ 1/hora) =
 * R$ 4.
 *
 * Elabore um algoritmo que, lido o tempo que determinado veículo permaneceu
 * estacionada no parque (horas e minutos), diga a quantia que deve ser paga.
 *
 * @author maaschmidt
 */
public class Estacionamento {

    public static void main(String[] args) {
        int hora = Entrada.leiaInt("Horas completas permanecidas (apenas as horas)");
        int minuto = Entrada.leiaInt("Minutos permanecidos (apenas os minutos)");
        double valor = 0;

        if (hora >= 2) {
            valor = 3.5 + ((minuto / 0.6) / 100) + hora - 2;
        } else if (hora == 1) {
            valor = 2 + ((minuto / 0.6) / 100) * 1.5;
        } else if (hora == 0) {
            valor = ((minuto / 0.6) / 100) * 2;
        }

        System.out.printf("Valor a pagar: R$%.2f\n", valor);
        System.exit(0);
    }

}
