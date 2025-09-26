import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static final String URL = "jdbc:mysql://metro.proxy.rlwy.net:54083/railway";
    private static final String USER = "root";
    private static final String PASSWORD = "zeYJromBsLefVmMkNwBUzFtwmTuEtKcd";

    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new SQLException("No se encontró el driver de MySQL", e);
        }
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
