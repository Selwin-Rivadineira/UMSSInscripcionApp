package sisinfo2;
import java.awt.BorderLayout;
import java.awt.Image;
import java.net.URL;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.Timer;

/**
 *
 * @author Eliot Rodrigo Heredia Villanueva
 */
public class ProcesoPago extends javax.swing.JFrame {
    private JLabel lblQR; 
    private Timer qrTimer; 
    public ProcesoPago() {
        initComponents(); 
        this.setLocationRelativeTo(null);
        
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jComboBox1 = new javax.swing.JComboBox<>();
        jTextFieldIngresoPago = new javax.swing.JTextField();
        jTextFieldCambio = new javax.swing.JTextField();
        jBotonPagar = new javax.swing.JButton();
        jPanel2 = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(0, 153, 255));
        jPanel1.setForeground(new java.awt.Color(51, 153, 255));

        jComboBox1.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "credito/debito", "efectivo ", "QR" }));
        jComboBox1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jComboBox1ActionPerformed(evt);
            }
        });

        jTextFieldIngresoPago.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextFieldIngresoPagoActionPerformed(evt);
            }
        });

        jTextFieldCambio.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextFieldCambioActionPerformed(evt);
            }
        });

        jBotonPagar.setText("pagar");
        jBotonPagar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBotonPagarActionPerformed(evt);
            }
        });

        jLabel2.setFont(new java.awt.Font("Segoe UI Black", 3, 18)); // NOI18N
        jLabel2.setText("                    Proceder al pago");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGap(15, 15, 15)
                .addComponent(jLabel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout.createSequentialGroup()
                .addContainerGap(9, Short.MAX_VALUE)
                .addComponent(jLabel2)
                .addGap(14, 14, 14))
        );

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(229, 229, 229)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                            .addComponent(jTextFieldIngresoPago)
                            .addComponent(jTextFieldCambio, javax.swing.GroupLayout.DEFAULT_SIZE, 93, Short.MAX_VALUE)))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(78, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(jBotonPagar)
                .addGap(18, 18, 18))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(15, 15, 15)
                .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 74, Short.MAX_VALUE)
                .addComponent(jTextFieldIngresoPago, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jTextFieldCambio, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jBotonPagar)
                .addGap(20, 20, 20))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>                        

    private void jComboBox1ActionPerformed(java.awt.event.ActionEvent evt) {                                           
        String opcion = (String) jComboBox1.getSelectedItem();
        if (opcion == null) return;

        if (lblQR == null) {
            lblQR = new JLabel();
            lblQR.setBounds(50, 150, 200, 200); 
            jPanel1.add(lblQR); 
       }

        lblQR.setIcon(null);
        jTextFieldIngresoPago.setEnabled(false);
        jTextFieldCambio.setEnabled(false);

        switch(opcion) {
            case "QR" -> {
        try {
            URL url = getClass().getResource("/imagenes/qrcode.png");
            if (url == null) {
                JOptionPane.showMessageDialog(this, "No se pudo encontrar la imagen del QR.");
                return;
            }
            ImageIcon originalIcon = new ImageIcon(url);

            Image scaledImage = originalIcon.getImage().getScaledInstance(300, 300, Image.SCALE_SMOOTH);
            ImageIcon qrIcon = new ImageIcon(scaledImage);

            JLabel qrLabel = new JLabel(qrIcon);
            qrLabel.setHorizontalAlignment(JLabel.CENTER);
            qrLabel.setVerticalAlignment(JLabel.CENTER);

            JPanel panel = new JPanel(new BorderLayout());
            panel.add(qrLabel, BorderLayout.CENTER);

            JDialog qrDialog = new JDialog(this, "Escanea el código QR", true);
            qrDialog.getContentPane().add(panel);
            qrDialog.setSize(350, 350);
            qrDialog.setLocationRelativeTo(null); 

            Timer timer = new Timer(10000, e -> qrDialog.dispose());
            timer.setRepeats(false);
            timer.start();

            qrDialog.setVisible(true);

        } catch (Exception ex) {
            JOptionPane.showMessageDialog(this, "No se pudo cargar la imagen del QR: " + ex.getMessage());
        }
        jTextFieldIngresoPago.setEnabled(false);
        jTextFieldCambio.setEnabled(false);
}

        case "Efectivo" -> {
            jTextFieldIngresoPago.setEnabled(true);
            jTextFieldCambio.setEnabled(true);
        }

        case "credito/debito" -> {
           Object sel = jComboBox1.getSelectedItem();
           if ("credito/debito".equals(sel)) {
               PagoTarjeta pagoFrame = new PagoTarjeta();
               pagoFrame.setLocationRelativeTo(null); 
               pagoFrame.setVisible(true);
            }
        }

        default -> {
        }
    }

    this.repaint(); 
    }                                          

    private void jTextFieldIngresoPagoActionPerformed(java.awt.event.ActionEvent evt) {                                                      
        
    }                                                     

    private void jTextFieldCambioActionPerformed(java.awt.event.ActionEvent evt) {                                                 
        
    }                                                

    private void jBotonPagarActionPerformed(java.awt.event.ActionEvent evt) {                                            
        JOptionPane.showMessageDialog(null, "Operación realizada con éxito");
    }                                           

    public static void main(String args[]) {
        java.awt.EventQueue.invokeLater(() -> {
            new ProcesoPago().setVisible(true);
            
        });
    }

    // Variables declaration - do not modify                     
    private javax.swing.JButton jBotonPagar;
    private javax.swing.JComboBox<String> jComboBox1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JTextField jTextFieldCambio;
    private javax.swing.JTextField jTextFieldIngresoPago;
    // End of variables declaration                   
}
