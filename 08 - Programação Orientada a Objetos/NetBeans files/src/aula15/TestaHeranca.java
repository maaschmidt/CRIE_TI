package aula15;

public class TestaHeranca {

    public static void main(String[] args) {
        Carro objCarro = new Carro();
        objCarro.setCor("Azul");
        objCarro.setMarca("Audi");
        objCarro.setQuantRodas(4);
        objCarro.setQuantPortas(2);
        
        Moto objMoto = new Moto();
        objMoto.setCor("Preto");
        objMoto.setMarca("Indian");
        objMoto.setPotencia(1300);
        objMoto.setQuantRodas(2);
        
        
        System.out.println(objCarro.getCor());
        System.out.println(objCarro.getMarca());
        System.out.println(objCarro.getQuantRodas());
        System.out.println(objCarro.getQuantPortas());
        System.out.println("");
        System.out.println(objMoto.getCor());
        System.out.println(objMoto.getMarca());
        System.out.println(objMoto.getQuantRodas());
        System.out.println(objMoto.getPotencia());
    }
}
