export async function registrarUsuario(datosUsuario){

}

export async function buscarUsuarios(){

    const URL="http://localhost:8000/usuarios"

    let peticion={
        method:"GET"
    }

    let respuestaInicial=await fetch(URL,peticion)
    let usuarios=await respuestaInicial.json()

    return usuarios

}