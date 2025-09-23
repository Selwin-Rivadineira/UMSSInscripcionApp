import javax.swing.*;
import java.awt.*;
import java.net.URI;

public class AbrirLinksJFrame {

    // Método para crear un botón que abra un link
    public static JButton crearBoton(JFrame ventana, String texto, String url) {
        JButton boton = new JButton(texto);
        boton.setPreferredSize(new Dimension(120, 50));
        boton.addActionListener(e -> {
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
        });
        return boton;
    }

    public static void main(String[] args) {
        // Crear ventana
        JFrame ventana = new JFrame("Abrir Links con Botones");
        ventana.setSize(400, 200);
        ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        ventana.setLayout(new FlowLayout());

        // Crear los tres botones con diferentes URLs
        JButton boton1 = crearBoton(ventana, "Facebook", "https://www.facebook.com/universidadmayordesansimonumss?locale=es_LA");
        JButton boton2 = crearBoton(ventana, "Pagina Oficial", "https://www.umss.edu.bo");
        JButton boton3 = crearBoton(ventana, "SAGAA", "https://sagaa.fcyt.umss.edu.bo/login/login.php");

        // Añadir botones a la ventana
        ventana.add(boton1);
        ventana.add(boton2);
        ventana.add(boton3);

        // Centrar ventana en pantalla
        ventana.setLocationRelativeTo(null);

        // Mostrar ventana
        ventana.setVisible(true);
    }
}
