package ferramentas;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author jonas
 */
public class Conexao {
    
    private final static String DRIVER = "org.postgresql.Driver";
    private final static String URL = "jdbc:postgresql://177.44.248.52:5432/poo";
    private final static String USER = "postgres";
    private final static String PASS = "Vwfuscaiid7760";  
    
    public static Connection con;
    public static Statement stmt;
    
    public static void openConnection() {
        try {
            
            con = getConnection();
            stmt = con.createStatement();
            System.out.print("Conexão com Banco de Dados Criada!");
        } catch (Exception ex) {
            System.out.print(ex);
        }
    }
    
    private static Connection getConnection(){
     
        try {
            Class.forName(DRIVER);
            
            return DriverManager.getConnection(URL, USER, PASS);
            
        } catch (ClassNotFoundException | SQLException ex) {
            System.out.println("Erro na conexão" + ex.getMessage());
            throw new RuntimeException("Erro na conexão", ex);
        }
    }
    
    public static void closeConnection(Connection con){
        try{
            
            if(con != null){
                con.close();
            }
            
        }catch(SQLException ex){
            Logger.getLogger(Conexao.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public static void closeConnection(Connection con, PreparedStatement stmt){
        
        //stmt é responsável por executar os comandos SQL - DML (Data Manipulation Langage)
        closeConnection(con);
        
        try{
            
            if(stmt != null){
                stmt.close();
            }
            
        }catch(SQLException ex){
            Logger.getLogger(Conexao.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public static void closeConnection(Connection con, PreparedStatement stmt, ResultSet rs){
        
        closeConnection(con, stmt);
        
        try{
            
            if(rs != null){
                rs.close();
            }
            
        }catch(SQLException ex){
            Logger.getLogger(Conexao.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}