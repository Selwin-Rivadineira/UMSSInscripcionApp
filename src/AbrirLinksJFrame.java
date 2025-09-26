import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.net.URI;

public class AbrirLinksJFrame {
    public static JLabel crearLink(JFrame ventana, String texto, String url) {
        JLabel label = new JLabel(texto);
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
        });

        return label;
    }
    public static JPanel crearPieDePagina(JFrame ventana) {
        JPanel pie = new JPanel(new FlowLayout(FlowLayout.CENTER));
        pie.setBorder(BorderFactory.createMatteBorder(1, 0, 0, 0, Color.GRAY)); // línea superior
        
        JLabel link1 = crearLink(ventana, "Facebook", "https://www.facebook.com/universidadmayordesansimonumss?locale=es_LA");
        JLabel link2 = crearLink(ventana, "Página Oficial", "https://www.umss.edu.bo");
        JLabel link3 = crearLink(ventana, "SAGAA", "https://sagaa.fcyt.umss.edu.bo/login/login.php");

        pie.add(link1);
        pie.add(new JLabel(" | "));
        pie.add(link2);
        pie.add(new JLabel(" | "));
        pie.add(link3);
        return pie;
    }
}