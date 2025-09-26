package umss.inscripcion.app;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

public class App extends JFrame {
    private JTabbedPane tabbedPane;
    private JTextField txtNombre, txtApellido, txtCI, txtCorreo, txtTelefono, txtDireccion, txtIDCursoRegistro;
    private JTextField txtIDPostulanteCurso, txtIDCurso, txtNombreExamen, txtApellidoExamen, txtCIExamen, txtIDConvocatoria;
    private JTextField txtIDPostulanteHorario, txtIDPostulanteNotas;
    private JTextArea txtHorario, txtNotas;
    private JTextField txtNombrePostulante;
    private JTextField txtApellidoPostulante;
    private JTextField txtCIPostulante;

    public App() {
        // Configuración básica de la ventana
        setTitle("Sistema de Inscripciones UMSS");
        setSize(600, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setIconImage(new ImageIcon("icon.png").getImage()); 

      
        JPanel mainPanel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                Graphics2D g2d = (Graphics2D) g;
                GradientPaint gp = new GradientPaint(0, 0, new Color(70, 130, 180), 0, getHeight(), new Color(135, 206, 235));
                g2d.setPaint(gp);
                g2d.fillRect(0, 0, getWidth(), getHeight());
            }
        };
        mainPanel.setLayout(new BorderLayout());
        setContentPane(mainPanel);

      
        tabbedPane = new JTabbedPane();
        tabbedPane.setFont(new Font("Arial", Font.BOLD, 16));
        tabbedPane.setBackground(new Color(70, 130, 180));
        tabbedPane.setForeground(Color.WHITE);
        tabbedPane.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        
        JPanel panelRegistro = createStyledPanel();
        panelRegistro.setLayout(new GridBagLayout());
        GridBagConstraints gbcRegistro = new GridBagConstraints();
        gbcRegistro.insets = new Insets(10, 10, 10, 10);
        gbcRegistro.fill = GridBagConstraints.HORIZONTAL;
        gbcRegistro.weightx = 1.0;

        addLabelAndField(panelRegistro, gbcRegistro, 0, "Nombre:", txtNombre = new JTextField(15));
        addLabelAndField(panelRegistro, gbcRegistro, 1, "Apellido:", txtApellido = new JTextField(15));
        addLabelAndField(panelRegistro, gbcRegistro, 2, "CI:", txtCI = new JTextField(15));
        addLabelAndField(panelRegistro, gbcRegistro, 3, "Correo:", txtCorreo = new JTextField(15));
        addLabelAndField(panelRegistro, gbcRegistro, 4, "Teléfono:", txtTelefono = new JTextField(15));
        addLabelAndField(panelRegistro, gbcRegistro, 5, "Dirección:", txtDireccion = new JTextField(15));
        addLabelAndField(panelRegistro, gbcRegistro, 6, "ID Curso (Opcional):", txtIDCursoRegistro = new JTextField(15));

        JButton btnRegistrar = createStyledButton("Registrar");
        btnRegistrar.addActionListener(e -> registrarPostulante());
        gbcRegistro.gridx = 0;
        gbcRegistro.gridy = 7;
        gbcRegistro.gridwidth = 2;
        gbcRegistro.fill = GridBagConstraints.NONE;
        gbcRegistro.anchor = GridBagConstraints.CENTER;
        panelRegistro.add(btnRegistrar, gbcRegistro);

        tabbedPane.addTab("Registro", panelRegistro);

 
        JPanel panelInscripcionCurso = createStyledPanel();
        panelInscripcionCurso.setLayout(new GridBagLayout());
        GridBagConstraints gbcCurso = new GridBagConstraints();
        gbcCurso.insets = new Insets(10, 10, 10, 10);
        gbcCurso.fill = GridBagConstraints.HORIZONTAL;
        gbcCurso.weightx = 1.0;

        addLabelAndField(panelInscripcionCurso, gbcCurso, 0, "Nombre:", new JTextField(15));
        txtNombrePostulante = (JTextField) panelInscripcionCurso.getComponent(panelInscripcionCurso.getComponentCount() - 1);

        addLabelAndField(panelInscripcionCurso, gbcCurso, 1, "Apellido:", new JTextField(15));
        txtApellidoPostulante = (JTextField) panelInscripcionCurso.getComponent(panelInscripcionCurso.getComponentCount() - 1);

        addLabelAndField(panelInscripcionCurso, gbcCurso, 2, "CI:", new JTextField(15));
        txtCIPostulante = (JTextField) panelInscripcionCurso.getComponent(panelInscripcionCurso.getComponentCount() - 1);

        addLabelAndField(panelInscripcionCurso, gbcCurso, 3, "ID Curso:", txtIDCurso = new JTextField(15));


        JButton btnInscribirCurso = createStyledButton("Inscribir");
        btnInscribirCurso.addActionListener(e -> inscribirCurso());
        gbcCurso.gridx = 1;
        gbcCurso.gridy = 4;
        gbcCurso.gridwidth = 2;
        gbcCurso.fill = GridBagConstraints.NONE;
        gbcCurso.anchor = GridBagConstraints.CENTER;
        panelInscripcionCurso.add(btnInscribirCurso, gbcCurso);

        tabbedPane.addTab("Inscripción Curso", panelInscripcionCurso);

       
        JPanel panelInscripcionExamen = createStyledPanel();
        panelInscripcionExamen.setLayout(new GridBagLayout());
        GridBagConstraints gbcExamen = new GridBagConstraints();
        gbcExamen.insets = new Insets(10, 10, 10, 10);
        gbcExamen.fill = GridBagConstraints.HORIZONTAL;
        gbcExamen.weightx = 1.0;

        addLabelAndField(panelInscripcionExamen, gbcExamen, 0, "Nombre:", txtNombreExamen = new JTextField(15));
        addLabelAndField(panelInscripcionExamen, gbcExamen, 1, "Apellido:", txtApellidoExamen = new JTextField(15));
        addLabelAndField(panelInscripcionExamen, gbcExamen, 2, "CI:", txtCIExamen = new JTextField(15));
        addLabelAndField(panelInscripcionExamen, gbcExamen, 3, "ID Convocatoria:", txtIDConvocatoria = new JTextField(15));

        JButton btnInscribirExamen = createStyledButton("Inscribir Examen");
        btnInscribirExamen.addActionListener(e -> inscribirExamen());
        gbcExamen.gridx = 1;
        gbcExamen.gridy = 4;
        gbcExamen.gridwidth = 2;
        gbcExamen.fill = GridBagConstraints.NONE;
        gbcExamen.anchor = GridBagConstraints.CENTER;
        panelInscripcionExamen.add(btnInscribirExamen, gbcExamen);

        tabbedPane.addTab("Inscripción Examen", panelInscripcionExamen);

       
        JPanel panelHorario = createStyledPanel();
        panelHorario.setLayout(new BorderLayout(10, 10));
        JPanel inputPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        inputPanel.add(new JLabel("ID Postulante:"));
        inputPanel.add(txtIDPostulanteHorario = new JTextField(10));
        panelHorario.add(inputPanel, BorderLayout.NORTH);
        JButton btnVerHorario = createStyledButton("Ver Horario");
        btnVerHorario.addActionListener(e -> verHorario());
        panelHorario.add(btnVerHorario, BorderLayout.CENTER);
        txtHorario = new JTextArea(5, 20);
        txtHorario.setEditable(false);
        txtHorario.setFont(new Font("Arial", Font.PLAIN, 14));
        txtHorario.setBackground(new Color(255, 255, 255));
        txtHorario.setBorder(BorderFactory.createLineBorder(new Color(70, 130, 180), 2));
        JScrollPane scrollHorario = new JScrollPane(txtHorario);
        panelHorario.add(scrollHorario, BorderLayout.SOUTH);
        tabbedPane.addTab("Horario", panelHorario);

      
        JPanel panelNotas = createStyledPanel();
        panelNotas.setLayout(new BorderLayout(10, 10));
        JPanel inputPanelNotas = new JPanel(new FlowLayout(FlowLayout.CENTER));
        inputPanelNotas.add(new JLabel("ID Postulante:"));
        inputPanelNotas.add(txtIDPostulanteNotas = new JTextField(10));
        panelNotas.add(inputPanelNotas, BorderLayout.NORTH);
        JButton btnVerNotas = createStyledButton("Ver Notas");
        btnVerNotas.addActionListener(e -> verNotas());
        panelNotas.add(btnVerNotas, BorderLayout.CENTER);
        txtNotas = new JTextArea(5, 20);
        txtNotas.setEditable(false);
        txtNotas.setFont(new Font("Arial", Font.PLAIN, 14));
        txtNotas.setBackground(new Color(255, 255, 255));
        txtNotas.setBorder(BorderFactory.createLineBorder(new Color(70, 130, 180), 2));
        JScrollPane scrollNotas = new JScrollPane(txtNotas);
        panelNotas.add(scrollNotas, BorderLayout.SOUTH);
        tabbedPane.addTab("Notas", panelNotas);

        mainPanel.add(tabbedPane, BorderLayout.CENTER);
    }

    private JPanel createStyledPanel() {
        JPanel panel = new JPanel();
        panel.setBackground(new Color(255, 255, 255));
        panel.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(135, 206, 235), 2),
            BorderFactory.createEmptyBorder(15, 15, 15, 15)
        ));
        return panel;
    }

    private JButton createStyledButton(String text) {
        JButton button = new JButton(text);
        button.setFont(new Font("Arial", Font.BOLD, 14));
        button.setBackground(new Color(0, 120, 215));
        button.setForeground(Color.WHITE);
        button.setFocusPainted(false);
        button.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(255, 215, 0), 2),
            BorderFactory.createEmptyBorder(5, 15, 5, 15)
        ));
        button.setCursor(new Cursor(Cursor.HAND_CURSOR));
        button.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                button.setBackground(new Color(0, 100, 180));
            }
            public void mouseExited(java.awt.event.MouseEvent evt) {
                button.setBackground(new Color(0, 120, 215));
            }
        });
        return button;
    }

    private void addLabelAndField(JPanel panel, GridBagConstraints gbc, int row, String labelText, JTextField textField) {
        gbc.gridx = 0;
        gbc.gridy = row;
        gbc.gridwidth = 1;
        JLabel label = new JLabel(labelText);
        label.setFont(new Font("Arial", Font.BOLD, 14));
        label.setForeground(new Color(70, 130, 180));
        panel.add(label, gbc);

        gbc.gridx = 1;
        textField.setFont(new Font("Arial", Font.PLAIN, 14));
        textField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(135, 206, 235), 1),
            BorderFactory.createEmptyBorder(5, 5, 5, 5)
        ));
        textField.setEditable(true); 
        panel.add(textField, gbc);
    }

    private void registrarPostulante() {
        String nombre = txtNombre.getText();
        String apellido = txtApellido.getText();
        String ci = txtCI.getText();
        String correo = txtCorreo.getText();
        String telefono = txtTelefono.getText();
        String direccion = txtDireccion.getText();
        String idCursoStr = txtIDCursoRegistro.getText();

        if (nombre.isEmpty() || apellido.isEmpty() || ci.isEmpty() || correo.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Por favor, completa todos los campos obligatorios.", "Error", JOptionPane.ERROR_MESSAGE);
            return;
        }

        try (Connection conn = DatabaseConnector.getConnection()) {
            conn.setAutoCommit(false);
            String sqlPostulante = "INSERT INTO Postulante (nombre, apellido, ci, correo, telefono, direccion) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement stmtPostulante = conn.prepareStatement(sqlPostulante, Statement.RETURN_GENERATED_KEYS);
            stmtPostulante.setString(1, nombre);
            stmtPostulante.setString(2, apellido);
            stmtPostulante.setString(3, ci);
            stmtPostulante.setString(4, correo);
            stmtPostulante.setString(5, telefono);
            stmtPostulante.setString(6, direccion);
            stmtPostulante.executeUpdate();
            ResultSet rs = stmtPostulante.getGeneratedKeys();
            int idPostulante = -1;
            if (rs.next()) {
                idPostulante = rs.getInt(1);
            }

            if (!idCursoStr.isEmpty()) {
                try {
                    int idCurso = Integer.parseInt(idCursoStr);
                    String sqlInscripcionCurso = "INSERT INTO InscripcionCurso (id_postulante, id_curso) VALUES (?, ?)";
                    PreparedStatement stmtInscripcionCurso = conn.prepareStatement(sqlInscripcionCurso);
                    stmtInscripcionCurso.setInt(1, idPostulante);
                    stmtInscripcionCurso.setInt(2, idCurso);
                    stmtInscripcionCurso.executeUpdate();
                } catch (NumberFormatException e) {
                    JOptionPane.showMessageDialog(this, "ID Curso debe ser un número válido.", "Error", JOptionPane.ERROR_MESSAGE);
                    conn.rollback();
                    return;
                }
            }

            conn.commit();
            JOptionPane.showMessageDialog(this, "Postulante registrado exitosamente con ID: " + idPostulante + 
                                          (idCursoStr.isEmpty() ? "" : " e inscrito en el curso."), "Éxito", JOptionPane.INFORMATION_MESSAGE);
            clearRegistroFields();
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error al registrar: " + e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void inscribirCurso() {
         String nombre = txtNombrePostulante.getText().trim();
    String apellido = txtApellidoPostulante.getText().trim();
    String ci = txtCIPostulante.getText().trim();

    if (nombre.isEmpty() || apellido.isEmpty() || ci.isEmpty() || txtIDCurso.getText().trim().isEmpty()) {
        JOptionPane.showMessageDialog(this, "Por favor, completa todos los campos.", "Error", JOptionPane.ERROR_MESSAGE);
        return;
    }

    try {
        int idCurso = Integer.parseInt(txtIDCurso.getText());

        try (Connection conn = DatabaseConnector.getConnection()) {
            // Buscar el postulante por nombre, apellido y CI
            String sqlBuscar = "SELECT id_postulante FROM postulante WHERE nombre=? AND apellido=? AND ci=?";
            PreparedStatement stmtBuscar = conn.prepareStatement(sqlBuscar);
            stmtBuscar.setString(1, nombre);
            stmtBuscar.setString(2, apellido);
            stmtBuscar.setString(3, ci);
            ResultSet rs = stmtBuscar.executeQuery();

            if (rs.next()) {
                int idPostulante = rs.getInt("id_postulante");

                // Inscribir al curso
                String sqlInscribir = "INSERT INTO inscripcioncurso (id_postulante, id_curso) VALUES (?, ?)";
                PreparedStatement stmtInscribir = conn.prepareStatement(sqlInscribir);
                stmtInscribir.setInt(1, idPostulante);
                stmtInscribir.setInt(2, idCurso);
                stmtInscribir.executeUpdate();

                JOptionPane.showMessageDialog(this, "Inscripción al curso exitosa.", "Éxito", JOptionPane.INFORMATION_MESSAGE);
            } else {
                JOptionPane.showMessageDialog(this, "No se encontró un postulante con esos datos.", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    } catch (NumberFormatException e) {
        JOptionPane.showMessageDialog(this, "El ID Curso debe ser un número.", "Error", JOptionPane.ERROR_MESSAGE);
    } catch (SQLException e) {
        JOptionPane.showMessageDialog(this, "Error al inscribir: " + e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
    }
    }

    private void inscribirExamen() {
        String nombre = txtNombreExamen.getText().trim();
    String apellido = txtApellidoExamen.getText().trim();
    String ci = txtCIExamen.getText().trim();

    if (nombre.isEmpty() || apellido.isEmpty() || ci.isEmpty() || txtIDConvocatoria.getText().trim().isEmpty()) {
        JOptionPane.showMessageDialog(this, "Por favor, completa todos los campos.", "Error", JOptionPane.ERROR_MESSAGE);
        return;
    }

    try {
        int idConvocatoria = Integer.parseInt(txtIDConvocatoria.getText());

        try (Connection conn = DatabaseConnector.getConnection()) {
            // Buscar el postulante por nombre, apellido y CI
            String sqlBuscar = "SELECT id_postulante FROM postulante WHERE nombre=? AND apellido=? AND ci=?";
            PreparedStatement stmtBuscar = conn.prepareStatement(sqlBuscar);
            stmtBuscar.setString(1, nombre);
            stmtBuscar.setString(2, apellido);
            stmtBuscar.setString(3, ci);
            ResultSet rs = stmtBuscar.executeQuery();

            if (rs.next()) {
                int idPostulante = rs.getInt("id_postulante");
                
                // Inscribir al examen
                String sqlInscribir = "INSERT INTO inscripcion (id_postulante, id_convocatoria) VALUES (?, ?)";
                PreparedStatement stmtInscribir = conn.prepareStatement(sqlInscribir);
                stmtInscribir.setInt(1, idPostulante);
                stmtInscribir.setInt(2, idConvocatoria);
                stmtInscribir.executeUpdate();

                JOptionPane.showMessageDialog(this, "Inscripción al examen de admisión exitosa.", "Éxito", JOptionPane.INFORMATION_MESSAGE);
            } else {
                JOptionPane.showMessageDialog(this, "No se encontró un postulante con esos datos.", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    } catch (NumberFormatException e) {
        JOptionPane.showMessageDialog(this, "El ID Convocatoria debe ser un número.", "Error", JOptionPane.ERROR_MESSAGE);
    } catch (SQLException e) {
        JOptionPane.showMessageDialog(this, "Error al inscribir: " + e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
    }
    }

    private void verHorario() {
        try {
            int idPostulante = Integer.parseInt(txtIDPostulanteHorario.getText());
            try (Connection conn = DatabaseConnector.getConnection()) {
                String sql = "SELECT h.dia, h.hora_inicio, h.hora_fin " +
                             "FROM Horario h " +
                             "JOIN InscripcionCurso ic ON h.id_inscripcion_curso = ic.id_inscripcion_curso " +
                             "WHERE ic.id_postulante = ?";
                PreparedStatement stmt = conn.prepareStatement(sql);
                stmt.setInt(1, idPostulante);
                ResultSet rs = stmt.executeQuery();
                StringBuilder sb = new StringBuilder();
                while (rs.next()) {
                    sb.append("Día: ").append(rs.getString("dia"))
                      .append(", Inicio: ").append(rs.getString("hora_inicio"))
                      .append(", Fin: ").append(rs.getString("hora_fin")).append("\n");
                }
                txtHorario.setText(sb.length() > 0 ? sb.toString() : "No hay horarios asignados.");
            }
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID Postulante debe ser un número.", "Error", JOptionPane.ERROR_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error al obtener horario: " + e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void verNotas() {
        try {
            int idPostulante = Integer.parseInt(txtIDPostulanteNotas.getText());
            try (Connection conn = DatabaseConnector.getConnection()) {
                String sql = "SELECT n.nota, n.fecha_examen " +
                             "FROM Notas n " +
                             "JOIN InscripcionCurso ic ON n.id_inscripcion_curso = ic.id_inscripcion_curso " +
                             "WHERE ic.id_postulante = ?";
                PreparedStatement stmt = conn.prepareStatement(sql);
                stmt.setInt(1, idPostulante);
                ResultSet rs = stmt.executeQuery();
                StringBuilder sb = new StringBuilder();
                while (rs.next()) {
                    sb.append("Nota: ").append(rs.getString("nota"))
                      .append(", Fecha: ").append(rs.getString("fecha_examen")).append("\n");
                }
                txtNotas.setText(sb.length() > 0 ? sb.toString() : "No hay notas disponibles.");
            }
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "ID Postulante debe ser un número.", "Error", JOptionPane.ERROR_MESSAGE);
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error al obtener notas: " + e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void clearRegistroFields() {
        txtNombre.setText("");
        txtApellido.setText("");
        txtCI.setText("");
        txtCorreo.setText("");
        txtTelefono.setText("");
        txtDireccion.setText("");
        txtIDCursoRegistro.setText("");
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new App().setVisible(true);
        });
    }
}
