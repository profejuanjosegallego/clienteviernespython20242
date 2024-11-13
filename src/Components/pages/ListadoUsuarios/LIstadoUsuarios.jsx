import { useState,useEffect } from "react";
export function ListadoUsuarios(){

    //SIMULANDO UN CONJUNTO DE DATOS QUE VIENE DEL BACK
    let usuarios=[
        {
            id: 5,
            nombre: "Juan Jose Gallego",
            telefono: "3225962363",
            ciudad: "Sabaneta"
        },
        {
            id: 85,
            nombre: "Laura Perez Muñoz",
            telefono: "3028905620",
            ciudad: "Sabaneta"
        },
        {
            id: 12,
            nombre: "Santiago Botero",
            telefono: "3108794547",
            ciudad: "Medellin"
        },
        {
            id: 122,
            nombre: "Karina Yamile",
            telefono: "3018794150",
            ciudad: "Medellin"
        },
        {
            id: 70,
            nombre: "Dila Francisco Zapata",
            telefono: "+573141414",
            ciudad: "La furia"
        }
    ]


    const[datosAPI,setDatosApi]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //Programo el useeffect para garantizar que llamare al servicio
    //y voy a trael los datos
    /*useEffect(function(){},[
        //ACA SE LLAMA AL SERVICIO (back)
        function(){
             //SE CARGA LA VARIABLE DE ESTADO CON LOS DATOS SERVICIO
            setDatosApi(usuarios)
            //SE CAMBIA LA VARIABLE DE ESTADO DE LA CARGA
            setEstadoCarga(false)
        }
    ])*/


    return(

        <>


            <br /><br /><br /><br /><br />
            {
                console.log(usuarios)
            }

            <h3>LISTADO DE USUARIOS</h3>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                //Renderizando un arreglo de objetos
                    usuarios.map(function(usuario){
                        return(
                            <div className="col">
                                <div className="card h-100 shadow p-5">
                                    <h5>{usuario.nombre}</h5>
                                    <h4>Ciudad: {usuario.ciudad}</h4>
                                </div>
                            </div>
                        )
                    })
                }

                </div>
            </div>
            
            

        </>
    )




}