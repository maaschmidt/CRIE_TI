/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aula01;

/**
 *
 * @author maaschmidt
 */
public class base {
    //Modificador de acesso
    //public => permite que o metodo fique visível para outras classes
    //privete =>  permite que apenas a própria classe utilize o método
    //protected => ?
    
    //static => permite que o metodo seja invocado sem a necessidade de criar uma nova instância
    //void => o método em questão não tem retorno
    
    public static void main(String[] args) {
        int var1 = 30;
        int var2 = 28;
                       
        imprimirExemplos(var1, var2);
                
        System.exit(0);
    }
    private static void imprimirExemplos(int var1,int var2){
        //mostrar var1
        System.out.println("var 1 = " + var1);
        //mostrar var2
        System.out.println("var 2 = " + var2);
        //teste de igual
        System.out.println("var 1 == var2 -> " + (var1 == var2));
        //teste de diferente
        System.out.println("var 1 != var2 -> " + (var1 != var2));
        //teste de var1 menor que var2
        System.out.println("var 1 < var2 -> " + (var1 < var2));
        //teste de var1 maior que var2
        System.out.println("var 1 > var2 -> " + (var1 > var2));
        //teste de var1 menor ou igual que var2
        System.out.println("var 1 <= var2 -> " + (var1 <= var2));
        //teste de var1 maior ou igual que var2
        System.out.println("var 1 >= var2 -> " + (var1 >= var2));
        
               
        
        //CONCATENAÇÃO SEM STRING BUILDER
        String resultado = "";
        //mostrar var1        
        resultado += "var 1 = " + var1;
        //mostrar var2
        resultado += "\nvar 2 = " + var2;
        //teste de igual
        resultado += "\nvar 1 == var2 -> " + (var1 == var2);
        //teste de diferente
        resultado += "\nvar 1 != var2 -> " + (var1 != var2);
        //teste de var1 menor que var2
        resultado += "\nvar 1 < var2 -> " + (var1 < var2);
        //teste de var1 maior que var2
        resultado += "\nvar 1 > var2 -> " + (var1 > var2);
        //teste de var1 menor ou igual que var2
        resultado += "\nvar 1 <= var2 -> " + (var1 <= var2);
        //teste de var1 maior ou igual que var2
        resultado += "\nvar 1 >= var2 -> " + (var1 >= var2);
        

        //STRING BUILDER
        StringBuilder resultado2 = new StringBuilder();
        //mostrar var1
        resultado2.append("var 1 = ");
        resultado2.append(var1);
        resultado2.append("\n");
        //mostrar var2
        resultado2.append("var 2 = ");
        resultado2.append(var2);
        resultado2.append("\n");
        //teste de igual
        resultado2.append("var1 == var2 = ");
        resultado2.append(var1 == var2);
        resultado2.append("\n");
        //teste de diferente
        resultado2.append("var1 != var2 = ");
        resultado2.append(var1 != var2);
        resultado2.append("\n");
        //teste de var1 menor que var2
        resultado2.append("var1 < var2 = ");
        resultado2.append(var1 < var2);
        resultado2.append("\n");
        //teste de var1 maior que var2
        resultado2.append("var1 > var2 = ");
        resultado2.append(var1 > var2);
        resultado2.append("\n");
        //teste de var1 menor ou igual que var2
        resultado2.append("var1 <= var2 = ");
        resultado2.append(var1 <= var2);
        resultado2.append("\n");
        //teste de var1 maior ou igual que var2
        resultado2.append("var1 >= var2 = ");
        resultado2.append(var1 >= var2);
        resultado2.append("\n");
        
        System.out.println("\nCONCATENAÇÃO\n\nSEM STRINGBUILDER");
        System.out.println(resultado);
        
        System.out.println("\n\nCOM STRINGBUILDER");
        System.out.println(resultado2);
    }
}
