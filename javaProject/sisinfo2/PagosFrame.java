package sisinfo2;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import ConexionBD.Conexion; 
import javax.swing.JOptionPane;
import javax.swing.JScrollPane;

public class PagosFrame extends javax.swing.JFrame {

   private boolean cargandoCursos = false;
    public PagosFrame() {
        initComponents();
             
       jTextAreaDescripcion.setLineWrap(true);
        jTextAreaDescripcion.setWrapStyleWord(true);
        jScrollPane1.setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        cargarCursosEnCombo(); 
        actualizarDescripcionYCursos(); 
        
    }

    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jComboBoxIDFacultad = new javax.swing.JComboBox<>();
        jComboBoxIDCurso = new javax.swing.JComboBox<>();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTextAreaDescripcion = new javax.swing.JTextArea();
        botonPagar = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jComboBoxIDFacultad.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jComboBoxIDFacultadActionPerformed(evt);
            }
        });

        jComboBoxIDCurso.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jComboBoxIDCursoActionPerformed(evt);
            }
        });

        jTextAreaDescripcion.setEditable(false);
        jTextAreaDescripcion.setColumns(20);
        jTextAreaDescripcion.setLineWrap(true);
        jTextAreaDescripcion.setRows(5);
        jScrollPane1.setViewportView(jTextAreaDescripcion);

        botonPagar.setText("pagar");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addContainerGap()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(jComboBoxIDFacultad, 0, 90, Short.MAX_VALUE)
                            .addComponent(jComboBoxIDCurso, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(42, 42, 42)
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 425, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(83, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(botonPagar)
                .addGap(21, 21, 21))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(19, 19, 19)
                .addComponent(jComboBoxIDFacultad, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jComboBoxIDCurso, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 77, Short.MAX_VALUE)
                .addComponent(botonPagar)
                .addGap(21, 21, 21))
        );

        pack();
    }// </editor-fold>                        

    private void jComboBoxIDFacultadActionPerformed(java.awt.event.ActionEvent evt) {                                                    
        if (cargandoCursos) return;
        String idFacultad = (String) jComboBoxIDFacultad.getSelectedItem();
        if (idFacultad != null) {
            cargarCursosPorFacultad(idFacultad); 
            if (jComboBoxIDCurso.getItemCount() > 0) {
                String primerCurso = (String) jComboBoxIDCurso.getItemAt(0);
                jComboBoxIDCurso.setSelectedItem(primerCurso);
                mostrarDescripcionCurso(idFacultad, primerCurso);
           } else {
                jTextAreaDescripcion.setText("No hay cursos disponibles para esta facultad.");
            }
        }
    }                                                   

    private void cargarCursosPorFacultad(String idFacultad) {
        Connection con = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
        try {
            con = Conexion.getConnection();
            String sql = "SELECT id_curso FROM CursoPreuniversitario WHERE id_facultad = ?";
            pst = con.prepareStatement(sql);
            pst.setString(1, idFacultad);
            rs = pst.executeQuery();

            cargandoCursos = true;
            jComboBoxIDCurso.removeAllItems(); 

            while (rs.next()) {
                jComboBoxIDCurso.addItem(rs.getString("id_curso"));
            }

            if (jComboBoxIDCurso.getItemCount() > 0) {
                jComboBoxIDCurso.setSelectedIndex(0);
                mostrarDescripcionCurso(idFacultad, (String) jComboBoxIDCurso.getSelectedItem());
            } else {
                jTextAreaDescripcion.setText("No hay cursos disponibles para esta facultad.");
            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error al cargar cursos: " + e.getMessage());
        } finally {
            cargandoCursos = false; // desbloqueamos el listener
            try { if (rs != null) rs.close(); } catch (SQLException ex) {}
            try { if (pst != null) pst.close(); } catch (SQLException ex) {}
            try { if (con != null) con.close(); } catch (SQLException ex) {}
        }
    }

    private void actualizarDescripcionYCursos() {
         
        if (cargandoCursos) return;

        String idFacultad = (String) jComboBoxIDFacultad.getSelectedItem();
        String idCurso = (String) jComboBoxIDCurso.getSelectedItem();

        if (idFacultad != null) {
        cargarCursosPorFacultad(idFacultad);

        if (idCurso != null) {
                mostrarDescripcionCurso(idFacultad, idCurso);
            }
         }
    } 
    
    private void jComboBoxIDCursoActionPerformed(java.awt.event.ActionEvent evt) {                                                 
      if (cargandoCursos) return; // ignorar mientras se cargan
        String idFacultad = (String) jComboBoxIDFacultad.getSelectedItem();
        String idCurso = (String) jComboBoxIDCurso.getSelectedItem();
        if (idFacultad != null && idCurso != null) {
            mostrarDescripcionCurso(idFacultad, idCurso);
        }
    }                                                
    
    private void cargarCursosEnCombo() {
        Connection con = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
        try {
            con = Conexion.getConnection();
            String sql = "SELECT DISTINCT id_facultad FROM CursoPreuniversitario";
            pst = con.prepareStatement(sql);
            rs = pst.executeQuery();
            jComboBoxIDFacultad.removeAllItems(); 
            while (rs.next()) {
                String facultad = rs.getString("id_facultad");
                jComboBoxIDFacultad.addItem(facultad); 
            }
        
            if (jComboBoxIDFacultad.getItemCount() > 0) {
                jComboBoxIDFacultad.setSelectedIndex(0);
                cargarCursosPorFacultad((String) jComboBoxIDFacultad.getSelectedItem());
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try { if (rs != null) rs.close(); } catch (Exception ex) {}
            try { if (pst != null) pst.close(); } catch (Exception ex) {}
            try { if (con != null) con.close(); } catch (Exception ex) {}
        }
    }
    
    private void mostrarDescripcionCurso(String idFacultad, String idCurso) {
        Connection con = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
       try {
            con = Conexion.getConnection();
            String sql = "SELECT descripcion FROM CursoPreuniversitario WHERE id_facultad = ? AND id_curso = ?";
            pst = con.prepareStatement(sql);
            pst.setString(1, idFacultad);
            pst.setString(2, idCurso);
            rs = pst.executeQuery();
            if (rs.next()) {
                String descripcion = rs.getString("descripcion");
                jTextAreaDescripcion.setText(descripcion); 
            } else {
                jTextAreaDescripcion.setText("No hay descripción disponible.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try { if (rs != null) rs.close(); } catch (SQLException ex) {}
            try { if (pst != null) pst.close(); } catch (SQLException ex) {}
            try { if (con != null) con.close(); } catch (SQLException ex) {}
        }
    }
    

    
    public static void main(String args[]) {
        
        java.awt.EventQueue.invokeLater(() -> {
            new PagosFrame().setVisible(true);
        });
    }

    // Variables declaration - do not modify                     
    private javax.swing.JButton botonPagar;
    private javax.swing.JComboBox<String> jComboBoxIDCurso;
    private javax.swing.JComboBox<String> jComboBoxIDFacultad;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTextArea jTextAreaDescripcion;
    // End of variables declaration                   
}
