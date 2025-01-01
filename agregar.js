function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
      alert("Por favor ingresa el usuario.");
      return;
    }
  
    const usuarios = { id: nombre, completada: false };
}

//que al agregar cada usuario que nos muetre dos botones para agregar, mostrar  con ayuda del fetch