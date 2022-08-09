package modelos;

/**
 *
 * @author maaschmidt
 */
public class ContaBanco {

    private String conta;
    private String agencia;
    private String titular;
    private double saldo;
    private double chequeEspecial;
    private String pix;
    private String senha;

    public ContaBanco(){
        
    }
    
    public ContaBanco(String agencia, String conta, String titular, double saldo, double chequeEspecial, String pix, String senha) {
        this.agencia = agencia;
        this.conta = conta;
        this.titular = titular;
        this.saldo = saldo;
        this.chequeEspecial = chequeEspecial;
        this.pix = pix;
        this.senha = senha;
    }
    
    public void transferir(ContaBanco contaReceber, double transferValue) {
        boolean realizado = saque(transferValue, false);
        if (saque(transferValue, true)) {
            contaReceber.deposito(transferValue, false);
            System.out.println("Transferência Realizada");
        } else {
            System.out.println("INVÁLIDO. Saldo Insuficiente");
        }
    }

    
    public String getConta() {
        return conta;
    }

    public void setConta(String conta) {
        this.conta = conta;
    }

    public String getAgencia() {
        return agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    } 

    public boolean saque(double value, boolean imprime) {
        if (value < this.saldo + this.chequeEspecial && imprime) {
            this.saldo -= value;
            if (imprime) {
                System.out.println("\nSaque realizado com sucesso\n");
            }
            if (this.saldo < 0){
                double sal, rest = 0; 
                sal = this.saldo;
                while (sal < 0){
                    rest += 0.01;
                    sal += 0.01;
                }
                this.chequeEspecial -= rest;
            }
            return true;
        } else {
            System.out.println("\nSaque inválido. Saldo insuficiente.\n");
            return false;
        }
    }

    public void deposito(double value, boolean imprime) {
        this.saldo += value;
        if (imprime) {
            System.out.println("Depósito realizado com sucesso");
        }
    }

    public double getChequeEspecial() {
        return chequeEspecial;
    }

    public void setChequeEspecial(double chequeEspecial) {
        this.chequeEspecial = chequeEspecial;
    }

    public String getPix() {
        return pix;
    }

    public void setPix(String pix) {
        this.pix = pix;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    

    @Override
    public String toString() {
        return titular;
                
    }
}
