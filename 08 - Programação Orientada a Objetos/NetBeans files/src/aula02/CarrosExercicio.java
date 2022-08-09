package aula02;

import modelos.Carro;
import modelos.Modelo;

/**
 *
 * @author maaschmidt
 */
public class CarrosExercicio {
    public static void main(String[] args) {
        
        Modelo modelo = new Modelo("Chevrolet", "Opala");
        
        Carro objCarro1 = new Carro();
        objCarro1.setMarca("Chevrolet");
        objCarro1.setModelo(new Modelo("Chevrolet", "Onix"));
        objCarro1.setCor("Branco");
        objCarro1.setAnoModelo(2018);
        objCarro1.setAnoFabricacao(2017);
        objCarro1.setPotencia(1.4);        
        
        Carro objCarro2 = new Carro();
        objCarro2.setMarca("Peugeot");
        objCarro2.setModelo(new Modelo("Peugeot", "208"));
        objCarro2.setCor("Marrom");
        objCarro2.setAnoModelo(2020);
        objCarro2.setAnoFabricacao(2020);
        objCarro2.setPotencia(1.2);
        
        
        System.out.println(objCarro1);
        System.out.println(objCarro2);

        if (objCarro1.getAnoFabricacao() > objCarro2.getAnoFabricacao()){
            System.out.println("Carro 1 é mais novo");
        } else if (objCarro1.getAnoFabricacao() < objCarro2.getAnoFabricacao()){
            System.out.println("Carro 2 é mais novo");
        } else {
            System.out.println("Os carros foram fabricados no mesmo ano");
        }        

        System.exit(0);
    }
}