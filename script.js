document.getElementById("registroForm").addEventListener("submit", function (event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    const formData = {
        nombre,
        apellido,
        fechaNacimiento
    };

    console.log("Datos a enviar:", formData);

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor", data);
        alert("Registro exitoso. Datos enviados al servidor.");
    })
    .catch(error => {
        console.error("Error al enviar los datos", error);
        alert ("Ha ocurrido un error al enviar los datos.");
    });
});