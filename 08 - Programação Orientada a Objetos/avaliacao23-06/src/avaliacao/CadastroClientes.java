package avaliacao;

import modelos.Cliente;

/**
 * Crie uma classe denominada Cliente e crie 6 atributos para ela, sendo que
 * existam pelo menos 3 tipos diferentes de variáveis envolvendo-os (lembre-se
 * de criar os métodos get e set).
 *
 * Em uma outra classe, crie 4 objetos que representem essa classe Cliente. Cada
 * cliente precisa receber atributos diferentes um dos outros.
 *
 * Após, imprima no console alguma informação pertinente a cada cliente (aqui
 * você poderá utilizar a sobreposição do método toString dentro da classe
 * Cliente).
 *
 * @author maaschmidt
 */
public class CadastroClientes {

    public static void main(String[] args) {
        Cliente objCliente1 = new Cliente("Marcel", "000.000.000/00", "(00)000-000-000", "Rua A, nº 00", 25, 'M');
        Cliente objCliente2 = new Cliente("Juca", "111.111.111/11", "(11)111-111-111", "Rua B, nº 11", 26, 'M');
        Cliente objCliente3 = new Cliente("Ariele", "222.222.222/22", "(22)222-222-222", "Rua C, nº 22", 24, 'F');
        Cliente objCliente4 = new Cliente("Pedro", "333.333.333/33", "(33)333-333-333", "Rua D, nº 33", 27, 'M');

        System.out.println(objCliente1.toString());
        System.out.println(objCliente2.toString());
        System.out.println(objCliente3.toString());
        System.out.println(objCliente4.toString());
    }
}
