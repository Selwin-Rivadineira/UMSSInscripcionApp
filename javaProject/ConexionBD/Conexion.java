package ConexionBD;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    private static final String URL = "jdbc:mysql://metro.proxy.rlwy.net:54083/sis_info?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
    private static final String USER = "root";
    private static final String PASSWORD = "zeYJromBsLefVmMkNwBUzFtwmTuEtKcd";

    public static Connection getConnection() {
        Connection conn = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println(" Conexion exitosa a la base de datos sis_info");
        } catch (ClassNotFoundException e) {
            System.out.println(" Error: No se encontró el Driver de MySQL " + e.getMessage());
        } catch (SQLException e) {
            System.out.println(" Error al conectar con la base de datos: " + e.getMessage());
        }
        return conn;
    }

    public static Connection getConexion() {
        throw new UnsupportedOperationException("Not supported yet."); 
    }

   /** public static void main(String[] args) {
      
        Connection conexion = Conexion.getConnection();
        if (conexion != null) {
            try {
                conexion.close();
                System.out.println(" Conexión cerrada correctamente.");
            } catch (SQLException e) {
                System.out.println(" Error al cerrar la conexión: " + e.getMessage());
            }
        }
    }*/
}
