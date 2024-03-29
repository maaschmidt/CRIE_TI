package aula10;

import ferramentas.Globais;
import ferramentas.Arquivo;
import java.util.ArrayList;
import modelos.ContaBanco;

/**
 *
 * @author maaschmidt
 */
public class TelaLogin extends javax.swing.JFrame {

    /**
     * Creates new form TelaLogin
     */
//    Usuario[] vetorUsuario = new Usuario[3];
    ArrayList<ContaBanco> arrayContas = new ArrayList<>();
    ContaBanco objContaBanco;
    Arquivo objArquivo;

    public TelaLogin() {
        initComponents();
        objArquivo = new Arquivo("/home/maaschmidt/Documents/NetBeansProjects/CRIE_TI/POO/POO/dados/contas");
        if (objArquivo.abrirLeitura()) {
            String linha;
            String[] vetor;
            String agencia;
            String conta;
            String titular;
            double saldo;
            double chequeEspecial;
            String pix;
            String senha;
            try {
                do {
                    linha = objArquivo.lerLinha();
                    if (linha != null) {
                        vetor = linha.split(";");
                        titular = vetor[0];
                        agencia = vetor[1];
                        conta = vetor[2];
                        saldo = Double.parseDouble(vetor[3]);
                        chequeEspecial = Double.parseDouble(vetor[4]);
                        pix = vetor[5];
                        senha = vetor[6];
                        objContaBanco = new ContaBanco(agencia, conta, titular, saldo, chequeEspecial, pix, senha);
                        arrayContas.add(objContaBanco);
                    }
                } while (linha != null);
            } catch (NumberFormatException ex){
                System.out.println("Erro de Conversão" + ex.getMessage());
            } catch (Exception ex){
                System.out.println("Erro" + ex.getMessage());
            }
                objArquivo.fecharArquivo();
        } else {
            Globais.exibirMensagem("Erro ao abrir arquivo!");
        }

//        vetorUsuario[0] = new Usuario("marcel", "81dc9bdb52d04dc20036dbd8313ed055");
//        vetorUsuario[1] = new Usuario("juca", "d93591bdf7860e1e4ee2fca799911215");
//        vetorUsuario[2] = new Usuario("bala", "827ccb0eea8a706c4c34a16891f84e7b");
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        btnEntrar = new javax.swing.JButton();
        txtConta = new javax.swing.JTextField();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        txtSenha = new javax.swing.JPasswordField();

        jLabel1.setText("jLabel1");

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        btnEntrar.setText("Entrar");
        btnEntrar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEntrarActionPerformed(evt);
            }
        });

        jLabel2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel2.setText("Conta");

        jLabel3.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel3.setText("Senha");

        jLabel4.setIcon(new javax.swing.ImageIcon(getClass().getResource("/imagens/login_icon.png"))); // NOI18N

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(jLabel4)
                .addGap(78, 78, 78))
            .addGroup(layout.createSequentialGroup()
                .addGap(51, 51, 51)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnEntrar, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel3, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(txtConta, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(txtSenha, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(51, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(24, 24, 24)
                .addComponent(jLabel4)
                .addGap(28, 28, 28)
                .addComponent(jLabel2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(txtConta, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jLabel3)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(txtSenha, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(42, 42, 42)
                .addComponent(btnEntrar, javax.swing.GroupLayout.PREFERRED_SIZE, 36, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(44, Short.MAX_VALUE))
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void btnEntrarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEntrarActionPerformed
        boolean login = validarLogin(txtConta.getText(), txtSenha.getText());
        if (login) {
            TelaMenu.objContaBanco = objContaBanco;
            TelaMenu.arrContas = arrayContas;
            TelaMenu tela = new TelaMenu();
            tela.setVisible(true);
//            TelaSistema tela = new TelaSistema();
//            tela.setVisible(true);
//            setVisible(false);
            dispose();
        } else {
            Globais.exibirMensagem("Usuário ou senha Incorretos");
        }

    }//GEN-LAST:event_btnEntrarActionPerformed

    private boolean validarLogin(String conta, String senha) {
        for (ContaBanco user : arrayContas) {
            if (user.getConta().equals(conta)
                    && user.getSenha().equals(Globais.gerarMD5(senha))) {
                objContaBanco = user;
                return true;
            }
        }
        return false;

//        for (int i = 0; i < vetorUsuario.length; i++) {
//            if (vetorUsuario[i].getUser().equals(login)
//                && vetorUsuario[i].getPass().equals(Globais.gerarMD5(senha))) {
//                return true;
//            }      
//        }
//        return false;
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(TelaLogin.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(TelaLogin.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(TelaLogin.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(TelaLogin.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new TelaLogin().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnEntrar;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JTextField txtConta;
    private javax.swing.JPasswordField txtSenha;
    // End of variables declaration//GEN-END:variables
}
