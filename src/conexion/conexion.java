package conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conexion {
private static final String URL = "jdbc:mysql://metro.proxy.rlwy.net:54083/sis_info?useSSL=false&serverTimezone=UTC";    private static final String USER = "root";  
    private static final String PASS = "zeYJromBsLefVmMkNwBUzFtwmTuEtKcd";      

    public static Connection getconexion() {
        Connection cn = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            cn = DriverManager.getConnection(URL, USER, PASS);
            System.out.println("✅ Conexión exitosa a la base de datos.");
        } catch (ClassNotFoundException e) {
            System.out.println("No se encontró el Driver MySQL: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("Error SQL al conectar: " + e.getMessage());
        }
        return cn;
    }
}
