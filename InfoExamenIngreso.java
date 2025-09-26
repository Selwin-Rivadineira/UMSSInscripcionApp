import java.awt.*;
import javax.swing.*;
import javax.swing.border.EmptyBorder;

public class InfoExamenIngresoUMSS {

    // 🔹 Constantes con información oficial de la UMSS FCyT
    private static final String TEXTO_INFO =
        "El examen de ingreso permite evaluar los conocimientos y aptitudes\n" +
        "de los aspirantes a la Universidad Mayor de San Simón (UMSS).\n\n" +
        "Modalidad: Presencial.\nDuración: 3 horas.";

    private static final String TEXTO_FECHAS =
        "Inicio inscripciones: 1 de Octubre 2025\n" +
        "Cierre inscripciones: 10 de Noviembre 2025\n" +
        "Examen: 6 de Diciembre 2025\n" +
        "Resultados: 20 de Diciembre 2025";

    private static final String TEXTO_REQUISITOS =
        "1. Documento de identidad válido.\n" +
        "2. Certificado de estudios secundarios.\n" +
        "3. Comprobante de pago de inscripción.";

    private static final String TEXTO_ESTRUCTURA =
        "Áreas evaluadas:\n" +
        "- Matemática\n" +
        "- Lenguaje y Comunicación\n" +
        "- Ciencias (según carrera)\n\n" +
        "Preguntas: 80\nDuración: 3 horas";

    private static final String TEXTO_PREGUNTAS =
        "¿Qué pasa si no apruebo?\n" +
        "- Puedes presentarte en la próxima convocatoria.\n\n" +
        "¿Dónde se publican los resultados?\n" +
        "- En la página oficial de la UMSS y en correo electrónico.";

    private static final String TEXTO_CONTACTO =
        "Correo: admision@fcyt.umss.edu.bo\n" +
        "Tel: +591 4 423-1765\n" +
        "Dirección: Calle Sucre y Parque la Torre, Cochabamba\n" +
        "Horario: Lunes a Viernes 9:00 - 16:00";

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            aplicarEstilo();
            crearGUI();
        });
    }

    // 🔹 Aplica un look moderno
    private static void aplicarEstilo() {
        try {
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

    // 🔹 Crea la ventana principal
    private static void crearGUI() {
        JFrame frame = new JFrame("Examen de Ingreso - UMSS FCyT");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JTabbedPane tabs = new JTabbedPane();

        tabs.addTab("Información", getIcon("info"), crearPanelTexto(TEXTO_INFO), "Detalles generales del examen");
        tabs.addTab("Fechas", getIcon("calendar"), crearPanelTexto(TEXTO_FECHAS), "Fechas importantes del examen");
        tabs.addTab("Requisitos", getIcon("list"), crearPanelTexto(TEXTO_REQUISITOS), "Documentos y condiciones");
        tabs.addTab("Estructura", getIcon("book"), crearPanelTexto(TEXTO_ESTRUCTURA), "Cómo se organiza el examen");
        tabs.addTab("FAQ", getIcon("help"), crearPanelTexto(TEXTO_PREGUNTAS), "Preguntas frecuentes");
        tabs.addTab("Contacto", getIcon("phone"), crearPanelTexto(TEXTO_CONTACTO), "Medios de contacto");

        frame.add(tabs);

        frame.pack();
        frame.setSize(750, 500);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    private static JPanel crearPanelTexto(String texto) {
        JPanel p = new JPanel(new BorderLayout());
        JTextArea area = new JTextArea(texto);
        area.setEditable(false);
        area.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        area.setLineWrap(true);
        area.setWrapStyleWord(true);
        area.setBorder(new EmptyBorder(10, 10, 10, 10));

        JScrollPane scroll = new JScrollPane(area);
        scroll.setBorder(null);
        p.add(scroll, BorderLayout.CENTER);
        return p;
    }

    private static Icon getIcon(String type) {
        JLabel label = new JLabel();
        switch (type) {
            case "info": label.setText("ℹ️"); break;
            case "calendar": label.setText("📅"); break;
            case "list": label.setText("📋"); break;
            case "book": label.setText("📖"); break;
            case "help": label.setText("❓"); break;
            case "phone": label.setText("☎️"); break;
            default: label.setText("•");
        }
        return label.getIcon();
    }
}

