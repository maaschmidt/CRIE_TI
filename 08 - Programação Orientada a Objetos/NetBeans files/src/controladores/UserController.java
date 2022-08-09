package controladores;

import ferramentas.Conexao;
import java.awt.Color;
import java.awt.Component;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Vector;
import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JTable;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableColumn;
import modelos.Usuario;

/**
 *
 * @author maaschmidt
 */
public class UserController {
    
    
    //login
    public boolean login (String login, String senha){
        try{
            //codigo
            Conexao.openConnection();//Abre conexão com o bando de dados
            PreparedStatement stmt;
            ResultSet rs;
            
            //Preencher select
            String wSql = "SELECT id FROM usuarios WHERE login = ? AND senha = md5(?)";
            stmt = Conexao.con.prepareStatement(wSql);
            stmt.setString(1, login);
            stmt.setString(2, senha);
            
            rs = stmt.executeQuery();
            
            return rs.next();
        } catch (SQLException ex) {
            System.out.println("ERRO: "+ ex.getMessage());
            return false;
        }
    }
    
    //incluir
    public boolean incluir(Usuario objUsuario){
        try{
            //codigo
            Conexao.openConnection();//Abre conexão com o bando de dados
            PreparedStatement stmt;
            
            //Preencher select
            String wSql = "INSERT INTO usuarios VALUES (DEFAULT, ?, ?, md5(?))";
            stmt = Conexao.con.prepareStatement(wSql);
            stmt.setString(1, objUsuario.getNome());
            stmt.setString(2, objUsuario.getLogin());
            stmt.setString(3, objUsuario.getPass());
            stmt.executeUpdate();
            
            return true;
        } catch (SQLException ex){
            System.out.println("Erro: " + ex.getMessage());
            return false;
        }
    }
    
    //alterar
    public boolean alterar(Usuario objeto){
        try{
            Conexao.openConnection(); //abre uma conexao de acesso com o banco de dados
            PreparedStatement stmt;
            
            //Preenche o comando a ser rodado no banco de dados
            String wSql = " UPDATE usuarios SET nome = ?, login = ? WHERE id = ? ";
            stmt = Conexao.con.prepareStatement(wSql);
            stmt.setString(1, objeto.getNome());
            stmt.setString(2, objeto.getLogin());
            stmt.setInt(3, objeto.getId());
            
            stmt.executeUpdate();
            
            return true;
            
        }catch(SQLException ex){
            System.out.println("ERRO: " + ex.getMessage());
            return false;
        }
    }
    
    //buscar
    public Usuario buscar(int id){
        Usuario objUsuario = null;
        try{
            //codigo
            Conexao.openConnection();//Abre conexão com o bando de dados
            PreparedStatement stmt;
            ResultSet rs;
            
            //Preencher select
            String wSql = "SELECT * FROM usuarios WHERE id = ?";
            stmt = Conexao.con.prepareStatement(wSql);
            stmt.setInt(1, id);
            
            rs = stmt.executeQuery();
            
            if(rs.next()){
                objUsuario = new Usuario();
                objUsuario.setId(rs.getInt("id"));
                objUsuario.setNome(rs.getString("nome"));
                objUsuario.setLogin(rs.getString("login"));
                objUsuario.setPass("");
                return objUsuario;
            } else {    
                return objUsuario;
            }
            
        } catch (SQLException ex) {
            System.out.println("ERRO2: "+ ex.getMessage());
            return objUsuario;
        }
    }
    public void preencher(JTable tabela){
        try{
            
        Conexao.openConnection();

        Vector<String> cabecalhos = new Vector<>();
        Vector dadosTabela = new Vector(); //receber os dados do banco

        Icon iconeEditar = new ImageIcon("src/imagens/edit.png");
        Icon iconeLixeira = new ImageIcon("src/imagens/delete.png");

        cabecalhos.add("Id");
        cabecalhos.add("Nome");
        cabecalhos.add("Editar");
        cabecalhos.add("Excluir");

        ResultSet rs = null;

        try {
            StringBuilder sql = new StringBuilder();
            sql.append(" SELECT id, nome FROM usuarios ORDER BY nome");

            rs = Conexao.stmt.executeQuery(sql.toString());

            Vector<Object> linha;
            while (rs.next()) {
                linha = new Vector<Object>();

                linha.add(rs.getInt("id"));
                linha.add(rs.getString("nome"));

                linha.add(iconeEditar);
                linha.add(iconeLixeira);

                dadosTabela.add(linha);
            }

        } catch (SQLException ex) {
            System.out.println("problemas para popular tabela: " + ex.getMessage());
        }

        tabela.setModel(new DefaultTableModel(dadosTabela, cabecalhos) {

            @Override
            public Class getColumnClass(int column) {
                return getValueAt(1, column).getClass();
            }

            @Override
            public boolean isCellEditable(int row, int column) {
                return false;
            }
            // permite seleção de apenas uma linha da tabela
        });

        // permite seleção de apenas uma linha da tabela
        tabela.setSelectionMode(0);

        // redimensiona as colunas de uma tabela
        TableColumn column = null;
        for (int i = 0; i <= 2; i++) {
            column
                    = tabela.getColumnModel().getColumn(i);
            switch (i) {
                case 0:
                    column.setPreferredWidth(50);//id 
                    break;
                case 1:
                    column.setPreferredWidth(200);//nome
                    break;
                case 4:
                    column.setPreferredWidth(10);//excluir
                    break;
            }
        }

        //função para deixar a tabela zebrada
        tabela.setDefaultRenderer(Object.class, new DefaultTableCellRenderer() {
            @Override
            public Component getTableCellRendererComponent(JTable table, Object value,
                    boolean isSelected, boolean hasFocus, int row, int column) {
                super.getTableCellRendererComponent(table, value, isSelected,
                        hasFocus, row, column);
                if (row % 2 == 0) {
                    setBackground(Color.LIGHT_GRAY);
                } else {
                    setBackground(Color.WHITE);
                }

                return this;
            }
        });
            
            
        }catch(Exception ex){
            System.out.println("ERRO: " + ex.getMessage());
        }
    }
}
