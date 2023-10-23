//Servicio para registrar un usuario
const Registrar = (nombre, apellido, email, usuario, password, categoria, ) => {
    return fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                password: password,
                username: usuario,
                first_name: nombre,
                last_name: apellido,
                categoria: categoria,
                email: email
            }
        )
    })
}
//Servicio para el login
const Login = async ()=>{
    return await fetch("https://fakestoreapi.com/users").then((respuesta) => respuesta.json())
}

export const clientServices = {
    Registrar,
    Login,
}