import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.net.URI;

public class AbrirLinksJFrame {
    public static JLabel crearLink(JFrame ventana, String texto, String url) {
        JLabel label = new JLabel( texto );
        label.setCursor(new Cursor(Cursor.HAND_CURSOR)); 
        label.setForeground(Color.BLUE); 

        label.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                try {
                    URI link = new URI(url);
                    if (Desktop.isDesktopSupported()) {
                        Desktop.getDesktop().browse(link);
                    } else {
                        JOptionPane.showMessageDialog(ventana, "No se puede abrir el navegador");
                    }
                } catch (Exception ex) {
                    ex.printStackTrace();
                    JOptionPane.showMessageDialog(ventana, "Error al abrir el link");
                }
            }

            @Override
            public void mouseEntered(MouseEvent e) {
                label.setText(texto );
            }

            @Override
            public void mouseExited(MouseEvent e) {
                label.setText(texto ); 
            }
        });

        return label;
    }

    public static void main(String[] args) {
        JFrame ventana = new JFrame("Abrir Links con JLabel");
        ventana.setSize(400, 200);
        ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        ventana.setLayout(new GridLayout(3, 1)); 
        JLabel link1 = crearLink(ventana, "Facebook", "https://www.facebook.com/universidadmayordesansimonumss?locale=es_LA");
        JLabel link2 = crearLink(ventana, "Página Oficial", "https://www.umss.edu.bo");
        JLabel link3 = crearLink(ventana, "SAGAA", "https://sagaa.fcyt.umss.edu.bo/login/login.php");
        ventana.add(link1);
        ventana.add(link2);
        ventana.add(link3);
        ventana.setLocationRelativeTo(null);
        ventana.setVisible(true);
    }
}
