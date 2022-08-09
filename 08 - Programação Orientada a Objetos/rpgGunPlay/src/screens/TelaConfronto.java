package screens;

import models.Arma;
import models.Inimigo;
import models.Personagem;
import tools.Globais;

/**
 *
 * @author maaschmidt
 */
public class TelaConfronto extends javax.swing.JFrame {

    Personagem personagemEscolhido = new Personagem();
    Arma armaEscolhida = new Arma();
    Inimigo inimigo = new Inimigo();
    boolean rottweiler = false;
    String fimJogo;
    boolean adotou = false;

    /**
     * Creates new form TelaConfronto
     *
     * @param confronto
     * @param personagemEscolhido
     * @param armaEscolhida
     * @param inimigo
     */
    public TelaConfronto(int confronto, Personagem personagemEscolhido, Arma armaEscolhida, Inimigo inimigo) {
        initComponents();
        this.personagemEscolhido = personagemEscolhido;
        this.armaEscolhida = armaEscolhida;
        this.inimigo = inimigo;
        setTela(confronto);
    }

    private void setTela(int confronto) {
        Globais.ajustarButton(getClass().getResource("/images/buttons/tiro.png"), btnTiro);
        Globais.ajustarButton(getClass().getResource("/images/buttons/algema.png"), btnAlgema);
        pnlFimJogo.setVisible(false);
        btnAlgema.setVisible(false);
        btnAdotar.setVisible(false);
        switch (confronto) {
            case 1:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/cidade1.jpeg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigo);
                break;
            case 2:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/cidade2.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigo);
                break;
            case 3:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/cidade3.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigo);
                break;
            case 4:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/interior1.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigo);
                if (inimigo.getId() == 0) {
                    Globais.exibirMensagem("Por você ter eliminado Michael, seus capangas armaram uma emboscada para você.\n"
                            + "Eles estão convencidos as elimina-lo.\nBoa Sorte!");
                    pgbMunicaoInimigo.setMaximum(inimigo.getMunicao());
                    pgbVidaInimigo.setMaximum(inimigo.getVida());
                    pgbMunicaoInimigo.setValue(inimigo.getMunicao());
                    pgbVidaInimigo.setValue(inimigo.getVida());
                }
                break;
            case 5:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/cidade4.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigo);
                break;
            case 6:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/interior2.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigo);
                break;
            case 7:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/interior3.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigoMaior);
                break;
            case 8:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/cidade5.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigo);
                break;
            case 9:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/interior4.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigo);
                break;
            case 10:
                mostrarPersonagemArma();
                Globais.ajustarImagem(getClass().getResource("/images/background/interior5.jpg"), lblFundo);
                Globais.ajustarImagem(getClass().getResource(inimigo.getCaminhoImagem()), lblInimigoMaior);
                btnAdotar.setVisible(true);
                break;
            default:
                break;
        }
    }

    private void mostrarPersonagemArma() {
        Globais.ajustarImagem(getClass().getResource(personagemEscolhido.getCaminhoImagem()), lblPersonagem);
        Globais.ajustarImagem(getClass().getResource(armaEscolhida.getCaminhoImagem()), lblArma);
        pgbMunicao.setValue(armaEscolhida.getMunicao());
        pgbVida.setValue(personagemEscolhido.getVida());
        pgbMunicaoInimigo.setValue(inimigo.getMunicao());
        pgbVidaInimigo.setValue(inimigo.getVida());
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        pnlFimJogo = new javax.swing.JPanel();
        btnInicio = new javax.swing.JButton();
        btnFimJogo = new javax.swing.JButton();
        lblFimJogo = new javax.swing.JLabel();
        pgbMunicaoInimigo = new javax.swing.JProgressBar();
        pgbVidaInimigo = new javax.swing.JProgressBar();
        pgbVida = new javax.swing.JProgressBar();
        pgbMunicao = new javax.swing.JProgressBar();
        btnAlgema = new javax.swing.JButton();
        btnTiro = new javax.swing.JButton();
        lblPersonagem = new javax.swing.JLabel();
        lblArma = new javax.swing.JLabel();
        lblInimigoMaior = new javax.swing.JLabel();
        btnAdotar = new javax.swing.JButton();
        lblInimigo = new javax.swing.JLabel();
        lblFundo = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        pnlFimJogo.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        btnInicio.setFont(new java.awt.Font("Checkpoint Charlie", 0, 15)); // NOI18N
        btnInicio.setForeground(new java.awt.Color(255, 255, 255));
        btnInicio.setText("INICIO");
        btnInicio.setContentAreaFilled(false);
        btnInicio.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnInicioActionPerformed(evt);
            }
        });
        pnlFimJogo.add(btnInicio, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 440, -1, -1));

        btnFimJogo.setContentAreaFilled(false);
        btnFimJogo.setCursor(new java.awt.Cursor(java.awt.Cursor.CROSSHAIR_CURSOR));
        btnFimJogo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnFimJogoActionPerformed(evt);
            }
        });
        pnlFimJogo.add(btnFimJogo, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 730, 490));
        pnlFimJogo.add(lblFimJogo, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 730, 490));

        getContentPane().add(pnlFimJogo, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 730, 490));

        pgbMunicaoInimigo.setFont(new java.awt.Font("Checkpoint Charlie", 0, 13)); // NOI18N
        pgbMunicaoInimigo.setForeground(new java.awt.Color(51, 51, 51));
        pgbMunicaoInimigo.setValue(75);
        pgbMunicaoInimigo.setBorderPainted(false);
        pgbMunicaoInimigo.setCursor(new java.awt.Cursor(java.awt.Cursor.CROSSHAIR_CURSOR));
        pgbMunicaoInimigo.setString("MUNICAO");
        pgbMunicaoInimigo.setStringPainted(true);
        getContentPane().add(pgbMunicaoInimigo, new org.netbeans.lib.awtextra.AbsoluteConstraints(490, 20, 220, 20));

        pgbVidaInimigo.setFont(new java.awt.Font("Checkpoint Charlie", 0, 13)); // NOI18N
        pgbVidaInimigo.setForeground(new java.awt.Color(51, 51, 51));
        pgbVidaInimigo.setValue(75);
        pgbVidaInimigo.setBorderPainted(false);
        pgbVidaInimigo.setCursor(new java.awt.Cursor(java.awt.Cursor.CROSSHAIR_CURSOR));
        pgbVidaInimigo.setString("VIDA");
        pgbVidaInimigo.setStringPainted(true);
        getContentPane().add(pgbVidaInimigo, new org.netbeans.lib.awtextra.AbsoluteConstraints(490, 60, 220, 20));

        pgbVida.setFont(new java.awt.Font("Checkpoint Charlie", 0, 13)); // NOI18N
        pgbVida.setForeground(new java.awt.Color(51, 51, 51));
        pgbVida.setValue(75);
        pgbVida.setBorderPainted(false);
        pgbVida.setCursor(new java.awt.Cursor(java.awt.Cursor.CROSSHAIR_CURSOR));
        pgbVida.setString("VIDA");
        pgbVida.setStringPainted(true);
        getContentPane().add(pgbVida, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 60, 220, 20));

        pgbMunicao.setFont(new java.awt.Font("Checkpoint Charlie", 0, 13)); // NOI18N
        pgbMunicao.setForeground(new java.awt.Color(51, 51, 51));
        pgbMunicao.setValue(75);
        pgbMunicao.setBorderPainted(false);
        pgbMunicao.setCursor(new java.awt.Cursor(java.awt.Cursor.CROSSHAIR_CURSOR));
        pgbMunicao.setString("MUNICAO");
        pgbMunicao.setStringPainted(true);
        getContentPane().add(pgbMunicao, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 20, 220, 20));

        btnAlgema.setBorderPainted(false);
        btnAlgema.setContentAreaFilled(false);
        btnAlgema.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAlgemaActionPerformed(evt);
            }
        });
        getContentPane().add(btnAlgema, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 420, 70, 50));

        btnTiro.setBorderPainted(false);
        btnTiro.setContentAreaFilled(false);
        btnTiro.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnTiroActionPerformed(evt);
            }
        });
        getContentPane().add(btnTiro, new org.netbeans.lib.awtextra.AbsoluteConstraints(270, 420, 60, 50));
        getContentPane().add(lblPersonagem, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 90, 220, 340));
        getContentPane().add(lblArma, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 420, 170, 60));
        getContentPane().add(lblInimigoMaior, new org.netbeans.lib.awtextra.AbsoluteConstraints(430, 130, 300, 240));

        btnAdotar.setFont(new java.awt.Font("Checkpoint Charlie", 0, 15)); // NOI18N
        btnAdotar.setText("ADOTAR");
        btnAdotar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAdotarActionPerformed(evt);
            }
        });
        getContentPane().add(btnAdotar, new org.netbeans.lib.awtextra.AbsoluteConstraints(610, 440, -1, -1));
        getContentPane().add(lblInimigo, new org.netbeans.lib.awtextra.AbsoluteConstraints(490, 90, 220, 340));
        getContentPane().add(lblFundo, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 730, 490));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void btnAlgemaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAlgemaActionPerformed
        int respRecompensa = Globais.fazerPergunta("Você prendeu " + inimigo.getNome() + ".\n"
                + "Pegue sua recompensa.", "PARABÉNS!", "Pegar", "Eliminar Inimigo", "Recusar");
        TelaMissao tela = null;
        if (respRecompensa == 0) {
            personagemEscolhido.setDinheiro(personagemEscolhido.getDinheiro() + inimigo.getRecompensa() * 2);
            tela = new TelaMissao(inimigo.getId() + 1, personagemEscolhido, armaEscolhida);
        } else if (respRecompensa == 1) {
            if (inimigo.getId() == 3) {
                tela = new TelaMissao(0, personagemEscolhido, armaEscolhida);
            } else {
                inimigoDerrotado();
                tela = new TelaMissao(inimigo.getId() + 1, personagemEscolhido, armaEscolhida);
            }
        }
        tela.setVisible(true);
        dispose();
    }//GEN-LAST:event_btnAlgemaActionPerformed

    private void inimigoDerrotado() {
        TelaMissao tela;
        Globais.exibirMensagem("Você eliminou seu oponente.\n Recebrá sua recompensa!");
        personagemEscolhido.setDinheiro(personagemEscolhido.getDinheiro() + inimigo.getRecompensa());
        switch (inimigo.getId()) {
            case 4:
                tela = new TelaMissao(inimigo.getId() + 1, personagemEscolhido, armaEscolhida);

                int adotar = Globais.fazerPergunta("Seu inimigo possuiá um rottweiler que não foi atingido\n"
                        + "\nEle pode te ajudar\nVocê gostaria de adota-lo?", "ROTTWEILER", "Adotar", "Entrega-lo", "Não adotar");
                if (adotar == 0) {
                    rottweiler = true;
                }
                break;
            case 3:
                tela = new TelaMissao(0, personagemEscolhido, armaEscolhida);
                break;
            case 10:
                fimJogo();
            default:
                tela = new TelaMissao(inimigo.getId() + 1, personagemEscolhido, armaEscolhida);
                break;
        }
        tela.setVisible(true);
        dispose();
    }

    private void fimJogo() {
        if (personagemEscolhido.getVida() < 2) {
            Globais.ajustarImagem(getClass().getResource("/images/background/gameOver.jpg"), lblFimJogo);
            fimJogo = "Você foi derrotado";
        } else {
            Globais.ajustarImagem(getClass().getResource("/images/background/youWin.png"), lblFimJogo);
            fimJogo = "Parabéns!\nVocê elimnou toda a gangue.\nAgora o vale está em paz.";
        }
        if (inimigo.getId() == 10 && !adotou) {
            Globais.ajustarImagem(getClass().getResource("/images/background/gameOver.jpg"), lblFimJogo);    
            Globais.exibirMensagem("Como você foi capaz?\nPense melhor sobre sua atitude.\nPROTEJA OS ANIMAIS!");    
            fimJogo = "Você foi derrotado";
            }
        pnlFimJogo.setVisible(true);
        btnAdotar.setVisible(false);
    }

    private void btnTiroActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnTiroActionPerformed
        int ataquePricipal = Globais.gerarNumero(10);
        int ataqueInimigo = Globais.gerarNumero(10);
        //Ataque Inimigo
        if (pgbMunicaoInimigo.getValue() >= 2) {
            ataqueInimigo(ataqueInimigo);
        }
        //Ataque Pricipal
        if (pgbMunicao.getValue() >= 2 && pgbVida.getValue() >= 2) {
            ataquePersonagem(ataquePricipal);
        }
    }//GEN-LAST:event_btnTiroActionPerformed

    private void btnFimJogoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnFimJogoActionPerformed
        Globais.exibirMensagem(fimJogo);
        if (fimJogo.equals("Você foi derrotado")) {
            TelaInicial tela = new TelaInicial();
            tela.setVisible(true);
            dispose();
        } else {
            Globais.ajustarImagem(getClass().getResource("/images/background/creditos.png"), lblFimJogo);
            btnFimJogo.setVisible(true);
            btnInicio.setVisible(true);
        }
    }//GEN-LAST:event_btnFimJogoActionPerformed

    private void btnInicioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnInicioActionPerformed
        TelaInicial tela = new TelaInicial();
        tela.setVisible(true);
        dispose();
    }//GEN-LAST:event_btnInicioActionPerformed

    private void btnAdotarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAdotarActionPerformed
        Globais.exibirMensagem("Foi uma sabia decisão\nParabéns!");
        adotou = true;
        fimJogo();
        btnInicio.setVisible(false);
    }//GEN-LAST:event_btnAdotarActionPerformed

    private void ataquePersonagem(int ataquePrincipal) {
        pgbMunicao.setValue(pgbMunicao.getValue() - 1);
        armaEscolhida.setMunicao(pgbMunicao.getValue() - 1);
        if (inimigo.getId() != 10 && inimigo.getVida() > 2) {
            switch (personagemEscolhido.getId()) {
                case 1:
                    ataqueSniper(ataquePrincipal);
                    break;
                case 2:
                    ataqueDestemido(ataquePrincipal);
                    break;
                case 3:
                    ataqueTatico(ataquePrincipal);
                    break;
                default:
                    break;
            }
        } else {
            fimJogo();
        }
    }

    private void ataqueInimigo(int ataqueInimigo) {
        if (personagemEscolhido.getVida() >= 2) {
            switch (personagemEscolhido.getId()) {
                case 1:
                    danoSniper(ataqueInimigo);
                    break;
                case 2:
                    danoDestemido(ataqueInimigo);
                    break;
                case 3:
                    danoTatico(ataqueInimigo);
                    break;
                default:
                    break;
            }
        } else {
            fimJogo();
        }
    }

    private void ataqueSniper(int ataquePrincipal) {
        if (inimigo.getId() == 1 && pgbMunicaoInimigo.getValue() <= 2 && !btnAlgema.isVisible()) {
            btnAlgema.setVisible(true);
            Globais.exibirMensagem("Seu inimigo está sem munição!\n Você pode prendê-lo clicando na algema");
        }
        if (pgbMunicaoInimigo.getValue() <= 2) {
            btnAlgema.setVisible(true);
        }
        if (inimigo.getId() == 3 && pgbVidaInimigo.getValue() > 0) {
            pgbVidaInimigo.setValue(pgbVidaInimigo.getValue() - ataquePrincipal * 2);
        } else if (pgbVidaInimigo.getValue() > 0) {
            pgbVidaInimigo.setValue(pgbVidaInimigo.getValue() - ataquePrincipal * 3);
        }
        if (rottweiler) {
            pgbVidaInimigo.setValue(pgbVidaInimigo.getValue() - 5);
        }
        if (pgbVidaInimigo.getValue() <= 2) {
            inimigoDerrotado();
        }
    }

    private void danoSniper(int ataqueInimigo) {
        if (inimigo.getId() == 1 && pgbVidaInimigo.getValue() == 100) {
            Globais.exibirMensagem("Todas as vezes que você atacar seu oponente e ele tiver munição, você será atacado");
        }
        if (inimigo.getId() == 0){
            pgbVida.setValue(pgbVida.getValue() - ataqueInimigo / 2);
        } else if (inimigo.getId() != 4) {
            pgbMunicaoInimigo.setValue(pgbMunicaoInimigo.getValue() - 2);
            pgbVida.setValue(pgbVida.getValue() - ataqueInimigo / 4);
        }
    }

    private void ataqueDestemido(int ataquePrincipal) {
        if (inimigo.getId() == 1 && pgbMunicaoInimigo.getValue() <= 0 && !btnAlgema.isVisible()) {
            btnAlgema.setVisible(true);
            Globais.exibirMensagem("Você parou de ser atingido\nSeu inimigo deve estar sem munição!\n Você pode prendê-lo clicando na algema");
        }
        if (pgbMunicaoInimigo.getValue() <= 2) {
            btnAlgema.setVisible(true);
        }
        if (pgbVidaInimigo.getValue() > 0) {
            pgbVidaInimigo.setValue(pgbVidaInimigo.getValue() - ataquePrincipal);
        }
        if (pgbVidaInimigo.getValue() <= 2) {
            inimigoDerrotado();
        }
    }

    private void danoDestemido(int ataqueInimigo) {
        if (inimigo.getId() == 1 && pgbVidaInimigo.getValue() == 100) {
            Globais.exibirMensagem("Todas as vezes que você atacar seu oponente e ele tiver munição, você será atacado");
        }
        if (inimigo.getId() != 4) {
            pgbMunicaoInimigo.setValue(pgbMunicaoInimigo.getValue() - 2);
        }
        pgbVida.setValue(pgbVida.getValue() - ataqueInimigo / 2);
        personagemEscolhido.setVida(pgbVida.getValue());
    }

    private void ataqueTatico(int ataquePrincipal) {
        if (inimigo.getId() == 1 && pgbMunicaoInimigo.getValue() <= 2 && !btnAlgema.isVisible()) {
            btnAlgema.setVisible(true);
            Globais.exibirMensagem("Seu inimigo está sem munição!\n Você pode prendê-lo clicando na algema");
        }
        if (pgbMunicaoInimigo.getValue() <= 2) {
            btnAlgema.setVisible(true);
        }
        if (pgbVidaInimigo.getValue() > 0) {
            pgbVidaInimigo.setValue(pgbVidaInimigo.getValue() - ataquePrincipal * 2);
        }
        if (pgbVidaInimigo.getValue() <= 2) {
            inimigoDerrotado();
        }
    }

    private void danoTatico(int ataqueInimigo) {
        if (inimigo.getId() == 1 && pgbVidaInimigo.getValue() == 100) {
            Globais.exibirMensagem("Todas as vezes que você atacar seu oponente e ele tiver munição, você será atacado");
        }
        if (inimigo.getId() != 4) {
            pgbMunicaoInimigo.setValue(pgbMunicaoInimigo.getValue() - 2);
        }
        pgbVida.setValue(pgbVida.getValue() - ataqueInimigo / 3);
        personagemEscolhido.setVida(pgbVida.getValue());
    }


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnAdotar;
    private javax.swing.JButton btnAlgema;
    private javax.swing.JButton btnFimJogo;
    private javax.swing.JButton btnInicio;
    private javax.swing.JButton btnTiro;
    private javax.swing.JLabel lblArma;
    private javax.swing.JLabel lblFimJogo;
    private javax.swing.JLabel lblFundo;
    private javax.swing.JLabel lblInimigo;
    private javax.swing.JLabel lblInimigoMaior;
    private javax.swing.JLabel lblPersonagem;
    private javax.swing.JProgressBar pgbMunicao;
    private javax.swing.JProgressBar pgbMunicaoInimigo;
    private javax.swing.JProgressBar pgbVida;
    private javax.swing.JProgressBar pgbVidaInimigo;
    private javax.swing.JPanel pnlFimJogo;
    // End of variables declaration//GEN-END:variables
}
