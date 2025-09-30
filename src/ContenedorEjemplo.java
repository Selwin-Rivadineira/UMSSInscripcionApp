import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.*;
import conexion.conexion; // importa tu clase de conexión

public class ContenedorEjemplo extends JFrame {

    private JTextArea areaTexto;

    public ContenedorEjemplo() {
        setTitle("Ejemplo de Contenedor con Información");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(600, 400);
        setLocationRelativeTo(null);

        JPanel contenedor = new JPanel();
        contenedor.setLayout(new BorderLayout());

        JLabel etiqueta = new JLabel("Resultados de la consulta", JLabel.CENTER);
        etiqueta.setFont(new Font("Arial", Font.BOLD, 16));

        areaTexto = new JTextArea();
        areaTexto.setLineWrap(true);
        areaTexto.setWrapStyleWord(true);
        JScrollPane scroll = new JScrollPane(areaTexto);

        // Panel para el botón Atrás
        JPanel panelBoton = new JPanel();
        JButton btnAtras = new JButton("Atrás");
        
        // Acción del botón Atrás
        btnAtras.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                regresarAtras();
            }
        });
        
        panelBoton.add(btnAtras);

        contenedor.add(etiqueta, BorderLayout.NORTH);
        contenedor.add(scroll, BorderLayout.CENTER);
        contenedor.add(panelBoton, BorderLayout.SOUTH);

        add(contenedor);

        // cargar datos automáticamente
        cargarDatos(InicioSesionDatos.CI); // CI de ejemplo

        setVisible(true);
    }

    private void cargarDatos(String ciBuscado) {
        // Consulta corregida para inscripciones a convocatorias
        String queryInscripcion = "SELECT i.id_inscripcion, p.id_postulante, p.nombre, p.apellido, p.ci, " +
                "c.titulo AS convocatoria, i.estado, i.fecha_inscripcion " +
                "FROM inscripcion i " +
                "INNER JOIN Postulante p ON i.id_postulante = p.id_postulante " +
                "INNER JOIN Convocatoria c ON i.id_convocatoria = c.id_convocatoria " +
                "WHERE p.ci = ?";

        // Consulta corregida para cursos preuniversitarios
        String queryCursoDetalles = "SELECT ic.id_inscripcion_curso, cp.descripcion, f.facultad, " +
                "cp.fecha_inicio, cp.fecha_fin, cp.costo, ic.fecha " +
                "FROM inscripcioncurso ic " +
                "INNER JOIN CursoPreuniversitario cp ON ic.id_curso = cp.id_curso " +
                "INNER JOIN facultades f ON cp.id_facultad = f.id_facultad " +
                "INNER JOIN Postulante p ON ic.id_postulante = p.id_postulante " +
                "WHERE p.ci = ?";

        try (Connection cn = conexion.getconexion();
             PreparedStatement stmtInscripcion = cn.prepareStatement(queryInscripcion);
             PreparedStatement stmtCurso = cn.prepareStatement(queryCursoDetalles)) {

            // Consulta de inscripciones a convocatorias
            stmtInscripcion.setString(1, ciBuscado);
            ResultSet rs1 = stmtInscripcion.executeQuery();

            areaTexto.append("📌 Información de Inscripción a Convocatorias:\n");
            boolean tieneInscripciones = false;
            while (rs1.next()) {
                tieneInscripciones = true;
                int idInscripcion = rs1.getInt("id_inscripcion");
                String idPostulante = rs1.getString("id_postulante");
                String nombre = rs1.getString("nombre");
                String apellido = rs1.getString("apellido");
                String ci = rs1.getString("ci");
                String convocatoria = rs1.getString("convocatoria");
                String estado = rs1.getString("estado");
                String fecha = rs1.getString("fecha_inscripcion");

                areaTexto.append("ID Inscripción: " + idInscripcion + "\n");
                areaTexto.append("Postulante: " + nombre + " " + apellido + " (CI: " + ci + ")\n");
                areaTexto.append("Convocatoria: " + convocatoria + "\n");
                areaTexto.append("Estado: " + estado + "\n");
                areaTexto.append("Fecha: " + fecha + "\n");
                areaTexto.append("-------------------------------\n");
            }
            
            if (!tieneInscripciones) {
                areaTexto.append("No se encontraron inscripciones a convocatorias.\n");
            }

            // Consulta de cursos preuniversitarios
            stmtCurso.setString(1, ciBuscado);
            ResultSet rs2 = stmtCurso.executeQuery();

            areaTexto.append("\n📚 Cursos Preuniversitarios Inscritos:\n");
            boolean tieneCursos = false;
            while (rs2.next()) {
                tieneCursos = true;
                int idInscripcionCurso = rs2.getInt("id_inscripcion_curso");
                String descripcion = rs2.getString("descripcion");
                String facultad = rs2.getString("facultad");
                String fechaInicio = rs2.getString("fecha_inicio");
                String fechaFin = rs2.getString("fecha_fin");
                double costo = rs2.getDouble("costo");
                String fechaInscripcion = rs2.getString("fecha");

                areaTexto.append("ID Inscripción Curso: " + idInscripcionCurso + "\n");
                areaTexto.append("Descripción: " + descripcion + "\n");
                areaTexto.append("Facultad: " + facultad + "\n");
                areaTexto.append("Fecha inicio: " + fechaInicio + " - Fecha fin: " + fechaFin + "\n");
                areaTexto.append("Costo: $" + costo + "\n");
                areaTexto.append("Fecha de inscripción: " + fechaInscripcion + "\n");
                areaTexto.append("-------------------------------\n");
            }
            
            if (!tieneCursos) {
                areaTexto.append("No se encontraron inscripciones a cursos preuniversitarios.\n");
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
            areaTexto.setText("Error al cargar datos: " + ex.getMessage());
        }
    }

    private void regresarAtras() {
        // Cierra esta ventana y regresa a la anterior
        this.dispose();
        
        // Si necesitas abrir una ventana anterior, aquí la instanciarías
        // Por ejemplo:
        // new VentanaAnterior().setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new ContenedorEjemplo());
    }
}