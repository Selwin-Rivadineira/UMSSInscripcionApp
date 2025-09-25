package sisinfo2;
import javax.swing.JOptionPane;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import ConexionBD.Conexion;
public class InicioSecion extends javax.swing.JFrame {
    public InicioSecion() {
        initComponents();
        this.setLocationRelativeTo(null);
        generarCodigo(); 
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jTextFieldCorreo = new javax.swing.JTextField();
        JtexFieldTelefono = new javax.swing.JPasswordField();
        JtextFieldCI = new javax.swing.JPasswordField();
        jTextFieldGenerar = new javax.swing.JTextField();
        JtextFieldCapcha = new javax.swing.JTextField();
        jBotonIniciar = new javax.swing.JButton();
        jTextField1 = new javax.swing.JTextField();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(51, 51, 255));

        jLabel1.setBackground(new java.awt.Color(255, 255, 255));
        jLabel1.setFont(new java.awt.Font("Segoe UI Black", 3, 12)); // NOI18N
        jLabel1.setText("correo:");

        jLabel3.setFont(new java.awt.Font("Segoe UI Black", 3, 12)); // NOI18N
        jLabel3.setText("contraseña:");

        jLabel2.setFont(new java.awt.Font("Segoe UI Black", 3, 12)); // NOI18N
        jLabel2.setText("cedula ident:");

        jTextFieldCorreo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextFieldCorreoActionPerformed(evt);
            }
        });

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

        jTextFieldGenerar.setEditable(false);
        jTextFieldGenerar.setBackground(new java.awt.Color(255, 255, 0));
        jTextFieldGenerar.setFont(new java.awt.Font("Segoe UI Black", 3, 14)); // NOI18N
        jTextFieldGenerar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextFieldGenerarActionPerformed(evt);
            }
        });

        JtextFieldCapcha.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                JtextFieldCapchaActionPerformed(evt);
            }
        });

        jBotonIniciar.setBackground(new java.awt.Color(255, 51, 51));
        jBotonIniciar.setText("iniciar");
        jBotonIniciar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBotonIniciarActionPerformed(evt);
            }
        });

        jTextField1.setEditable(false);
        jTextField1.setBackground(new java.awt.Color(204, 204, 204));
        jTextField1.setFont(new java.awt.Font("Segoe UI Black", 3, 18)); // NOI18N
        jTextField1.setText("              Inicio De Secion De Postulanes ");
        jTextField1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jBotonIniciar)
                .addGap(24, 24, 24))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(25, 25, 25)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(jTextFieldGenerar)
                    .addComponent(jLabel3, javax.swing.GroupLayout.PREFERRED_SIZE, 81, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 71, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(JtexFieldTelefono, javax.swing.GroupLayout.DEFAULT_SIZE, 163, Short.MAX_VALUE)
                    .addComponent(jTextFieldCorreo)
                    .addComponent(JtextFieldCI)
                    .addComponent(JtextFieldCapcha))
                .addGap(170, 170, 170))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jTextField1)
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(21, 21, 21)
                .addComponent(jTextField1, javax.swing.GroupLayout.PREFERRED_SIZE, 51, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel1)
                    .addComponent(jTextFieldCorreo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel3)
                    .addComponent(JtexFieldTelefono, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(JtextFieldCI, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jTextFieldGenerar, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(JtextFieldCapcha, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 71, Short.MAX_VALUE)
                .addComponent(jBotonIniciar)
                .addGap(22, 22, 22))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>                        

    private void jTextFieldCorreoActionPerformed(java.awt.event.ActionEvent evt) {                                                 

    }                                                

    private void JtexFieldTelefonoActionPerformed(java.awt.event.ActionEvent evt) {                                                  

    }                                                 

    private void JtextFieldCIActionPerformed(java.awt.event.ActionEvent evt) {                                             

    }                                            

    private void jBotonIniciarActionPerformed(java.awt.event.ActionEvent evt) {                                              
        String correo = jTextFieldCorreo.getText().trim();
        String telefono = new String(JtexFieldTelefono.getPassword()).trim();
        String ci = new String(JtextFieldCI.getPassword()).trim();
        String captchaGenerado = jTextFieldGenerar.getText().trim();   
        String captchaIngresado = JtextFieldCapcha.getText().trim();   

        if(correo.isEmpty() || telefono.isEmpty() || ci.isEmpty() || captchaIngresado.isEmpty()){
            JOptionPane.showMessageDialog(this, "Debe llenar todos los campos, incluido el código de verificación", "Error", JOptionPane.ERROR_MESSAGE);
            return;
        }

        if (!captchaGenerado.equalsIgnoreCase(captchaIngresado)) {
            JOptionPane.showMessageDialog(this, "El código de verificación no coincide", "Error", JOptionPane.ERROR_MESSAGE);
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

    private void jTextFieldGenerarActionPerformed(java.awt.event.ActionEvent evt) {                                                  

    }                                                 

    private void JtextFieldCapchaActionPerformed(java.awt.event.ActionEvent evt) {                                                 
        
    }                                                

    private void jTextField1ActionPerformed(java.awt.event.ActionEvent evt) {                                            
        // TODO add your handling code here:
    }                                           

    private void generarCodigo() {
        String letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String numeros = "0123456789";
        StringBuilder codigo = new StringBuilder();
        java.util.Random rand = new java.util.Random();
        for (int i = 0; i < 3; i++) {
            codigo.append(letras.charAt(rand.nextInt(letras.length())));
        }
        for (int i = 0; i < 3; i++) {
            codigo.append(numeros.charAt(rand.nextInt(numeros.length())));
        }
        jTextFieldGenerar.setText(codigo.toString());
        }
        public static void main(String args[]) {
            java.awt.EventQueue.invokeLater(() -> {
                new InicioSecion().setVisible(true);
            });
        }

    // Variables declaration - do not modify                     
    private javax.swing.JPasswordField JtexFieldTelefono;
    private javax.swing.JPasswordField JtextFieldCI;
    private javax.swing.JTextField JtextFieldCapcha;
    private javax.swing.JButton jBotonIniciar;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JTextField jTextField1;
    private javax.swing.JTextField jTextFieldCorreo;
    private javax.swing.JTextField jTextFieldGenerar;
    // End of variables declaration                   
}
