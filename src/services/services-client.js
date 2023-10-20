const Registrar = (nombre, apellido, email, usuario, password, categoria, fechaRegistro) => {
    return fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                password: password,
                username: usuario,
                first_name: nombre,
                last_name: apellido,
                email: email,
                groups: [
                    {
                        name: categoria
                    }
                ],
                user_permissions: [],
                is_superuser: false,
                is_staff: false,
                is_active: true,
                date_joined: fechaRegistro,
                last_login: fechaRegistro
            }
        )
    })
}

const Login = async ()=>{
    return await fetch("http://localhost:3000/user").then((respuesta) => respuesta.json())
}

export const clientServices = {
    Registrar,
    Login,
}