import javax.swing.*;

import conexion.conexion;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;

public class SeleccionFacultad extends JFrame {
    private JComboBox<String> comboFacultades;
    private JButton btnContinuar;
    private Connection conn;
    
    private ArrayList<String> facultades;

    public SeleccionFacultad() {
        
        conn = conexion.getconexion();
        
        facultades = obtenerFacultades();
        
        setTitle("Selección de Facultad - UMSS");
        setSize(500, 200);
        setLocationRelativeTo(null); 
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout(10, 10));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        JLabel label = new JLabel("Seleccione su Facultad:", JLabel.CENTER);
        label.setFont(new Font("Arial", Font.BOLD, 16));
        panel.add(label, BorderLayout.NORTH);

        comboFacultades = new JComboBox<>(facultades.toArray(new String[0]));
        comboFacultades.setFont(new Font("Arial", Font.PLAIN, 14));
        panel.add(comboFacultades, BorderLayout.CENTER);

        btnContinuar = new JButton("Continuar");
        btnContinuar.setFont(new Font("Arial", Font.BOLD, 14));
        btnContinuar.setBackground(new Color(70, 130, 180));
        btnContinuar.setForeground(Color.WHITE);

        panel.add(btnContinuar, BorderLayout.SOUTH);

        btnContinuar.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String facultadSeleccionada = (String) comboFacultades.getSelectedItem();
                datos.setFacultad(facultadSeleccionada);
                infoPreUniversitarios info = new infoPreUniversitarios();
                info.setVisible(true);
                SeleccionFacultad.this.dispose();
            }
        });

        add(panel);
    }

    public ArrayList<String> obtenerFacultades() {
        ArrayList<String> facultadesList = new ArrayList<>();
        try {
            String sql = "SELECT facultad FROM facultades";
            Statement sent = conn.createStatement();   
            ResultSet rs = sent.executeQuery(sql);

            while (rs.next()) {
                facultadesList.add(rs.getString("facultad"));
            }

            rs.close();
            sent.close();
        } catch (SQLException e) {
            e.printStackTrace();
            JOptionPane.showMessageDialog(this, 
                "Error al cargar las facultades: " + e.getMessage(),
                "Error", JOptionPane.ERROR_MESSAGE);
        }
        return facultadesList;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new SeleccionFacultad().setVisible(true);
        });
    }
}