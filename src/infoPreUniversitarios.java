import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import conexion.conexion;

public class infoPreUniversitarios extends JFrame {
    Connection conn;
    static String[] base = new String[10];

    public infoPreUniversitarios() {
        super("Sistema Académico");
        setSize(550, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        PreUniversitario();
        crearGUI();
    }

    private void crearGUI() {
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));
        mainPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        mainPanel.setBackground(new Color(240, 240, 240));

        JLabel titleLabel = new JLabel("PRE UNIVERSITARIO", JLabel.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 24));
        titleLabel.setForeground(new Color(44, 62, 80));
        titleLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel subtitleLabel = new JLabel("DE LA FACULTAD DE", JLabel.CENTER);
        subtitleLabel.setFont(new Font("Arial", Font.PLAIN, 16));
        subtitleLabel.setForeground(new Color(100, 100, 100));
        subtitleLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel facultyLabel = new JLabel(datos.getFacultad(), JLabel.CENTER);
        facultyLabel.setFont(new Font("Arial", Font.BOLD, 20));
        facultyLabel.setForeground(new Color(52, 152, 219));
        facultyLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        facultyLabel.setBorder(BorderFactory.createCompoundBorder(
                new LineBorder(new Color(52, 152, 219), 2, true),
                BorderFactory.createEmptyBorder(10, 20, 10, 20)
        ));
        facultyLabel.setBackground(new Color(240, 248, 255));
        facultyLabel.setOpaque(true);

        JPanel accordion1 = createAccordionSection(
                "Pre universitarios a inicio de año",
                "fecha limite de inscripcion = " + base[0] + "<br>" +
                "fecha de inicio de las clases = " + base[1] + "<br>" +
                "fecha final de las clases = " + base[2] + "<br>" +
                base[3] + "<br>" +
                "coste = " + base[4] + "<br>",
                new Color(52, 152, 219),
                false 
        );

        JPanel accordion2 = createAccordionSection(
                "Pre universitarios a finales de año",
                "fecha limite de inscripcion = " + base[5] + "<br>" +
                "fecha de inicio de las clases = " + base[6] + "<br>" +
                "fecha final de las clases = " + base[7] + "<br>" +
                base[8] + "<br>" +
                "coste = " + base[9] + "<br>",
                new Color(46, 204, 113),
                false 
        );

        mainPanel.add(titleLabel);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 5)));
        mainPanel.add(subtitleLabel);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 10)));
        mainPanel.add(facultyLabel);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 20)));
        mainPanel.add(accordion1);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 15)));
        mainPanel.add(accordion2);

        JButton btnAtras = new JButton("Atras");
        btnAtras.setAlignmentX(Component.CENTER_ALIGNMENT);
        btnAtras.addActionListener(e -> {
            SeleccionFacultad facu = new SeleccionFacultad();
            facu.setVisible(true);
            infoPreUniversitarios.this.dispose();
        });
        mainPanel.add(Box.createRigidArea(new Dimension(0, 15)));
        mainPanel.add(btnAtras);
        mainPanel.add(Box.createVerticalGlue());

        JScrollPane scrollPane = new JScrollPane(mainPanel);
        scrollPane.setBorder(null);
        add(scrollPane);
    }

    private JPanel createAccordionSection(String title, String content, Color color, boolean expandido) {
        JPanel container = new JPanel(new BorderLayout());
        container.setMaximumSize(new Dimension(Integer.MAX_VALUE, Integer.MAX_VALUE));
        container.setBackground(new Color(240, 240, 240));

        final String originalTitle = title;

        JButton button = new JButton((expandido ? "▼ " : "► ") + originalTitle);
        button.setFont(new Font("Arial", Font.BOLD, 14));
        button.setForeground(Color.WHITE);
        button.setBackground(color);
        button.setOpaque(true);
        button.setContentAreaFilled(true);
        button.setBorderPainted(false);
        button.setBorder(BorderFactory.createCompoundBorder(
                new LineBorder(color.darker(), 1),
                BorderFactory.createEmptyBorder(12, 15, 12, 15)
        ));
        button.setCursor(new Cursor(Cursor.HAND_CURSOR));
        button.setFocusPainted(false);
        button.setHorizontalAlignment(SwingConstants.LEFT);

        JPanel contentPanel = new JPanel(new BorderLayout());
        contentPanel.setBorder(BorderFactory.createCompoundBorder(
                new LineBorder(new Color(200, 200, 200), 1),
                BorderFactory.createEmptyBorder(15, 15, 15, 15)
        ));
        contentPanel.setBackground(Color.WHITE);
        contentPanel.setVisible(expandido);
        JTextArea contentText = new JTextArea();
        contentText.setEditable(false);
        contentText.setLineWrap(true);
        contentText.setWrapStyleWord(true);
        contentText.setBackground(Color.WHITE);
        contentText.setFont(new Font("Arial", Font.PLAIN, 13));
        contentText.setBorder(BorderFactory.createEmptyBorder(5, 5, 5, 5));
        String textoPlano = content.replace("<br>", "\n")
                                   .replaceAll("<[^>]*>", "");
        contentText.setText(textoPlano);

        JScrollPane textScrollPane = new JScrollPane(contentText);
        textScrollPane.setBorder(null);
        textScrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
        textScrollPane.setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        contentText.setPreferredSize(new Dimension(Integer.MAX_VALUE, 120));

        contentPanel.add(textScrollPane, BorderLayout.CENTER);

        button.addActionListener(e -> {
            boolean visible = !contentPanel.isVisible();
            contentPanel.setVisible(visible);
            button.setText((visible ? "▼ " : "► ") + originalTitle);
            container.revalidate();
            container.repaint();
        });

        container.add(button, BorderLayout.NORTH);
        container.add(contentPanel, BorderLayout.CENTER);

        return container;
    }

    void PreUniversitario() {
        try {
            conn = conexion.getconexion();
            String sql = "SELECT c.descripcion, c.fecha_limite, c.fecha_inicio, c.fecha_fin, c.costo " +
                    "FROM CursoPreuniversitario c " +
                    "INNER JOIN facultades f " +
                    "ON f.id_facultad = c.id_facultad " +
                    "WHERE f.facultad = ?";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, datos.getFacultad());
            ResultSet rs = ps.executeQuery();
            for (int i = 0; rs.next(); i = i + 5) {
                base[i] = rs.getDate("fecha_limite").toString();
                base[i + 1] = rs.getDate("fecha_inicio").toString();
                base[i + 2] = rs.getDate("fecha_fin").toString();
                base[i + 3] = rs.getString("descripcion");
                base[i + 4] = rs.getString("costo");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        SwingUtilities.invokeLater(() -> {
            infoPreUniversitarios ventana = new infoPreUniversitarios();
            ventana.setVisible(true);
        });
    }
}