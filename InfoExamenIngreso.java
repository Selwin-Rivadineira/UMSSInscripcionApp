import java.awt.*;
import javax.swing.*;
import javax.swing.border.EmptyBorder;

public class InfoExamenIngreso {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            aplicarEstilo();
            crearGUI();
        });
    }

    private static void aplicarEstilo() {
        try {
            // Usa Nimbus si está disponible, si no el look & feel del sistema
            for (UIManager.LookAndFeelInfo info : UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    UIManager.setLookAndFeel(info.getClassName());
                    return;
                }
            }
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            System.out.println("No se pudo aplicar estilo: " + e.getMessage());
        }
    }

    private static void crearGUI() {
        JFrame frame = new JFrame("Examen de Ingreso - Universidad Ejemplo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JTabbedPane tabs = new JTabbedPane();

        tabs.addTab("Información", crearPanelTexto(textoInformacion()));
        tabs.addTab("Fechas", crearPanelTexto(textoFechas()));
        tabs.addTab("Requisitos", crearPanelTexto(textoRequisitos()));
        tabs.addTab("Estructura", crearPanelTexto(textoEstructura()));
        tabs.addTab("Preguntas frecuentes", crearPanelTexto(textoPreguntas()));
        tabs.addTab("Contacto", crearPanelTexto(textoContacto()));

        frame.add(tabs);
        frame.pack(); // ajusta el tamaño al contenido
        frame.setSize(720, 500); // tamaño mínimo agradable
        frame.setLocationRelativeTo(null); // centra ventana
        frame.setVisible(true);
    }

    private static JPanel crearPanelTexto(String texto) {
        JPanel p = new JPanel(new BorderLayout());
        JTextArea area = new JTextArea(texto);
        area.setEditable(false);
        area.setFont(new Font("Arial", Font.PLAIN, 14));
        area.setLineWrap(true); // ajusta líneas largas
        area.setWrapStyleWord(true);
        area.setBorder(new EmptyBorder(10, 10, 10, 10));

        JScrollPane scroll = new JScrollPane(area);
        scroll.setBorder(null);
        p.add(scroll, BorderLayout.CENTER);
        return p;
    }

    // Métodos para organizar los textos
    private static String textoInformacion() {
        return "El examen de ingreso es la prueba que permite evaluar los conocimientos\n" +
               "y aptitudes de los aspirantes a la universidad.\n\n" +
               "Modalidad: Presencial.\nDuración: 3 horas.";
    }

    private static String textoFechas() {
        return "Inicio inscripciones: 1 de Octubre 2025\n" +
               "Cierre inscripciones: 10 de Noviembre 2025\n" +
               "Examen: 6 de Diciembre 2025\n" +
               "Resultados: 20 de Diciembre 2025";
    }

    private static String textoRequisitos() {
        return "1. Documento de identidad válido.\n" +
               "2. Certificado de estudios secundarios.\n" +
               "3. Comprobante de pago de inscripción.";
    }

    private static String textoEstructura() {
        return "Áreas evaluadas:\n" +
               "- Matemática\n" +
               "- Lenguaje y Comunicación\n" +
               "- Ciencias (según carrera)\n\n" +
               "Preguntas: 80\nDuración: 3 horas";
    }

    private static String textoPreguntas() {
        return "¿Qué pasa si no apruebo?\n" +
               "- Puedes presentarte en la próxima convocatoria.\n\n" +
               "¿Dónde se publican los resultados?\n" +
               "- En la página oficial y en correo electrónico.";
    }

    private static String textoContacto() {
        return "Correo: admision@universidad.edu\n" +
               "Tel: +591 2 123-4567\n" +
               "Dirección: Av. Ejemplo 123, Ciudad\n" +
               "Horario: Lunes a Viernes 9:00 - 16:00";
    }
}
