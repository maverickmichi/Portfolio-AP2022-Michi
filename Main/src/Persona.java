public class Persona {
    //atributos
        private int id;
        private String nombre;
        private String apellido;
        private String dni;
    
    //constructores

    public Persona(int id, String nombre, String apellido, String dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    
    public Persona() {
        
    }
    
    //getters y setters

    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getDni() {
        return dni;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }
        
    
    
    //metodos
    
    public void saludar(){
        System.out.println("Bienvenidos, soy " + nombre);
    }
    
    
    
}
