import { useState } from "react"

export function FormularioUsuario(){

    const[nombreUsuario,setNombreUsuario]=useState('')
    const[edadUsuario,setEdadUsuario]=useState('')
    const[telefonoUsuario,setTelefonoUsuario]=useState('')
    const[correoUsuario,setCorreoUsuario]=useState('')
    const[contraseñaUsuario,setContraseñaUsuario]=useState('')
    const[fechaUsuario,setFechaUsuario]=useState('')
    const[ciudadUsuario,setCiudadUsuario]=useState('')

    return(

        <>
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Registro de usuario: </h3>
                        <form className="p-5 border rounded shadow">
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Nombre: </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Edad: </label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Telefono: </label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Correo: </label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Contraseña: </label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Fecha Registro: </label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Ciudad: </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )


}