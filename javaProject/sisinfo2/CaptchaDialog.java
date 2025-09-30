package sisinfo2;
import javax.swing.*;

public class CaptchaDialog extends JDialog {
    private JCheckBox jCheckBoxRobot;
    private boolean captchaCorrecto = false;

    public CaptchaDialog(JFrame parent, boolean modal) {
        super(parent, modal); 
        initComponents();
    }

    private void initComponents() {
        setTitle("Verificación Captcha");
        setSize(300, 150);
        setLayout(null);

        jCheckBoxRobot = new JCheckBox("No soy un robot");
        jCheckBoxRobot.setBounds(50, 40, 200, 30);
        jCheckBoxRobot.setFont(new java.awt.Font("Arial", java.awt.Font.BOLD, 18)); 
        add(jCheckBoxRobot);

        JButton aceptar = new JButton("Aceptar");
        aceptar.setBounds(100, 80, 80, 25);
        add(aceptar);

        aceptar.addActionListener(e -> {
            captchaCorrecto = jCheckBoxRobot.isSelected();
            dispose(); // cierra el diálogo
        });

        setLocationRelativeTo(null); // centrar en pantalla
    }

    public boolean isCaptchaCorrecto() {
        return captchaCorrecto;
    }
}