package sisinfo2;
import javax.swing.JOptionPane;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import ConexionBD.Conexion; 
/**
 *
 * @author Eliot Rodrigo Heredia Villanueva
 */
public class InicioSecion extends javax.swing.JFrame {

   
    public InicioSecion() {
        initComponents();
    }

    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jTextFieldCorreo = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        JtexFieldTelefono = new javax.swing.JPasswordField();
        JtextFieldCI = new javax.swing.JPasswordField();
        jBotonIniciar = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jTextFieldCorreo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextFieldCorreoActionPerformed(evt);
            }
        });

        jLabel1.setText("correo:");

        jLabel2.setText("cedula ident:");

        jLabel3.setText("contraseña:");

        JtexFieldTelefono.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                JtexFieldTelefonoActionPerformed(evt);
            }
        });

        JtextFieldCI.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                JtextFieldCIActionPerformed(evt);
            }
        });

        jBotonIniciar.setText("iniciar");
        jBotonIniciar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBotonIniciarActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(16, 16, 16)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 71, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel3, javax.swing.GroupLayout.PREFERRED_SIZE, 81, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 81, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 23, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(jTextFieldCorreo)
                    .addComponent(JtexFieldTelefono)
                    .addComponent(JtextFieldCI, javax.swing.GroupLayout.DEFAULT_SIZE, 170, Short.MAX_VALUE))
                .addContainerGap(210, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jBotonIniciar)
                .addGap(15, 15, 15))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(68, 68, 68)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jTextFieldCorreo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel1))
                .addGap(21, 21, 21)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(JtexFieldTelefono, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(JtextFieldCI, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 185, Short.MAX_VALUE)
                .addComponent(jBotonIniciar)
                .addGap(19, 19, 19))
        );

        pack();
    }// </editor-fold>                        

    private void jBotonIniciarActionPerformed(java.awt.event.ActionEvent evt) {                                              
        String correo = jTextFieldCorreo.getText().trim();
        String telefono = new String(JtexFieldTelefono.getPassword()).trim();
        String ci = new String(JtextFieldCI.getPassword()).trim();

        if(correo.isEmpty() || telefono.isEmpty() || ci.isEmpty()){
            JOptionPane.showMessageDialog(this, "Debe llenar todos los campos", "Error", JOptionPane.ERROR_MESSAGE);
            return;
        }

        Connection con = null;
        PreparedStatement pst = null;
        ResultSet rs = null;

        try {
        
            con = ConexionBD.Conexion.getConnection();

            String sql = "SELECT * FROM Postulante WHERE correo = ? AND telefono = ? AND ci = ?";
            pst = con.prepareStatement(sql);
            pst.setString(1, correo);
            pst.setString(2, telefono);
            pst.setString(3, ci);

            rs = pst.executeQuery();

            if(rs.next()){
           
                JOptionPane.showMessageDialog(this, "Inicio de sesión exitoso. ¡Bienvenido " + rs.getString("nombre") + "!");
           
            } else {
           
                JOptionPane.showMessageDialog(this, "Usuario o contraseña incorrectos", "Error", JOptionPane.ERROR_MESSAGE);
            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error de conexión: " + e.getMessage());
        } finally {
      
            try {
                if(rs != null) rs.close();
                if(pst != null) pst.close();
                if(con != null) con.close();
           } catch (SQLException e) {
           
            }
        }   
    }                                             

    private void jTextFieldCorreoActionPerformed(java.awt.event.ActionEvent evt) {                                                 
        
    }                                                

    private void JtexFieldTelefonoActionPerformed(java.awt.event.ActionEvent evt) {                                                  
        
    }                                                 

    private void JtextFieldCIActionPerformed(java.awt.event.ActionEvent evt) {                                             
      
    }                                            

    public static void main(String args[]) {
        
        java.awt.EventQueue.invokeLater(() -> {
            new InicioSecion().setVisible(true);
        });
    }
    // Variables declaration - do not modify                     
    private javax.swing.JPasswordField JtexFieldTelefono;
    private javax.swing.JPasswordField JtextFieldCI;
    private javax.swing.JButton jBotonIniciar;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JTextField jTextFieldCorreo;
    // End of variables declaration                   
}
