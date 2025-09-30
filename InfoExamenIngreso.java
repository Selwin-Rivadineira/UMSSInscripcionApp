import java.awt.BorderLayout;
import java.awt.Component;
import java.awt.Font;
import javax.swing.*;

public class InfoExamenIngresoUMSS {

    public static void main(String[] args) {
        SwingUtilities.invokeLater(InfoExamenIngresoUMSS::crearGUI);
    }

    private static void crearGUI() {
        JFrame frame = new JFrame("Examen de Ingreso - Universidad Ejemplo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLocationRelativeTo((Component) null);

        JTabbedPane tabs = new JTabbedPane();

        tabs.addTab("Información", crearPanelTexto(
                "El examen de ingreso es la prueba que permite evaluar los conocimientos\n"
                        + "y aptitudes de los aspirantes a la universidad.\n\n"
                        + "Modalidad: Presencial.\nDuración: 3 horas."));

        tabs.addTab("Fechas", crearPanelTexto(
                "Inicio inscripciones: 1 de Octubre 2025\n"
                        + "Cierre inscripciones: 10 de Noviembre 2025\n"
                        + "Examen: 6 de Diciembre 2025\n"
                        + "Resultados: 20 de Diciembre 2025"));

        tabs.addTab("Requisitos", crearPanelTexto(
                "1. Documento de identidad válido.\n"
                        + "2. Certificado de estudios secundarios.\n"
                        + "3. Comprobante de pago de inscripción."));

        tabs.addTab("Estructura", crearPanelTexto(
                "Áreas evaluadas:\n"
                        + "- Matemática\n"
                        + "- Lenguaje y Comunicación\n"
                        + "- Ciencias (según carrera)\n\n"
                        + "Preguntas: 80\nDuración: 3 horas"));

        tabs.addTab("Preguntas frecuentes", crearPanelTexto(
                "¿Qué pasa si no apruebo?\n"
                        + "- Puedes presentarte en la próxima convocatoria.\n\n"
                        + "¿Dónde se publican los resultados?\n"
                        + "- En la página oficial y en correo electrónico."));

        tabs.addTab("Facultades", crearPanelTexto(
                "Facultades disponibles:\n"
                        + "- Ingeniería\n"
                        + "- Ciencias Económicas\n"
                        + "- Humanidades\n"
                        + "- Ciencias Jurídicas\n"
                        + "- Medicina\n"
                        + "- Agronomía\n"
                        + "- Arquitectura y Artes\n"
                        + "- Tecnología"));

        tabs.addTab("Contacto", crearPanelTexto(
                "Correo: admision@universidad.edu\n"
                        + "Tel: +591 2 123-4567\n"
                        + "Dirección: Av. Ejemplo 123, Ciudad\n"
                        + "Horario: Lunes a Viernes 9:00 - 16:00"));

        frame.add(tabs);
        frame.setVisible(true);
    }

    private static JPanel crearPanelTexto(String texto) {
        JPanel panel = new JPanel(new BorderLayout());
        JTextArea area = new JTextArea(texto);
        area.setEditable(false);
        area.setFont(new Font("Arial", Font.PLAIN, 14));
        area.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        panel.add(new JScrollPane(area), BorderLayout.CENTER);
        return panel;
    }
}
