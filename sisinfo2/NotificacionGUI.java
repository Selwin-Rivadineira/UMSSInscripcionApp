import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

public class NotificacionGUI extends JFrame {
    private JTextField campoTitulo;
    private JTextArea campoMensaje;
    private JButton botonGuardar;
    private DefaultListModel<String> modeloLista;
    private JList<String> listaNotificaciones;

    public NotificacionGUI() {
        setTitle("Notificación de Registro");
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        JPanel panelFormulario = new JPanel(new GridLayout(5, 1));
        panelFormulario.add(new JLabel("Título:"));
        campoTitulo = new JTextField();
        panelFormulario.add(campoTitulo);
        panelFormulario.add(new JLabel("Mensaje:"));
        campoMensaje = new JTextArea(3, 20);
        panelFormulario.add(new JScrollPane(campoMensaje));
        botonGuardar = new JButton("Guardar Notificación");
        panelFormulario.add(botonGuardar);
        add(panelFormulario, BorderLayout.NORTH);

        modeloLista = new DefaultListModel<>();
        listaNotificaciones = new JList<>(modeloLista);
        add(new JScrollPane(listaNotificaciones), BorderLayout.CENTER);

        botonGuardar.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                guardarNotificacion();
            }
        });

        cargarNotificaciones();
    }

    private void guardarNotificacion() {
        String titulo = campoTitulo.getText();
        String mensaje = campoMensaje.getText();
        if (titulo.isEmpty() || mensaje.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Completa todos los campos.");
            return;
        }
        try (Connection conn = DatabaseConnection.getConnection()) {
            String sql = "INSERT INTO notificaciones (titulo, mensaje) VALUES (?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, titulo);
            stmt.setString(2, mensaje);
            stmt.executeUpdate();
            modeloLista.addElement(titulo + ": " + mensaje);
            campoTitulo.setText("");
            campoMensaje.setText("");
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(this, "Error al guardar: " + ex.getMessage());
        }
    }

    private void cargarNotificaciones() {
        modeloLista.clear();
        try (Connection conn = DatabaseConnection.getConnection()) {
            String sql = "SELECT titulo, mensaje FROM notificaciones";
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                String titulo = rs.getString("titulo");
                String mensaje = rs.getString("mensaje");
                modeloLista.addElement(titulo + ": " + mensaje);
            }
        } catch (Exception ex) {
            // Puede estar vacía la tabla
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new NotificacionGUI().setVisible(true));
    }
}
