import React from 'react'
import { useState, useEffect } from 'react'
import "./Pedido.css"

export default function Pedido() {
    const [estado, setEstado] = useState(false);
    

    //Con pedidos Guardamos 
     var pedidos = JSON.parse(localStorage.getItem("entrada")) ;
     
     
 
    
     

     function eliminar(objeto){
        
        
         pedidos.filter(item => {
             if(item.name === objeto.name){
                 pedidos.splice(pedidos.indexOf(item), 1);
                 localStorage.setItem("entrada", JSON.stringify(pedidos));
                 console.log(objeto);
             }
                 
                 
         });
         setEstado(true);
 
         document.location.reload(estado);
       
        
     }
 
    useEffect(() => {
     setEstado(false);
     
    }, [pedidos]);
     
     //Con esta Obtenemos los datos y los listamos
     var pedido = JSON.parse(localStorage.getItem("entrada")) ;
   
     

  return (
    <div className='table-container'>
    <h1>Lista de Pedidos</h1>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Opcion</th>
            </tr>
        </thead>
        <tbody>
            {pedidos.map(pedido => {
                return(
                    <tr>
                        <td>{pedido.nombre}</td>
                        <td>{pedido.precio}</td>
                        <td><button  id="eliminar" type="button" onClick={()=>{eliminar(pedido)}}>ELIMINAR</button></td>
                    </tr>
                )
            })}

        </tbody>

    </table>
</div>   

  )
}
