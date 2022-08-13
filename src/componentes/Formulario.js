import React from 'react';
import { useState, useEffect } from 'react';
import "./Formulario.css"

export default function Formulario(){
    const [estado, setEstado] = useState(false);
    

   //Con Comentarios Guardamos 
    var comentarios = JSON.parse(localStorage.getItem("comentarios")) ;
    
    

    //Si comentarios es null, lo inicializamos como array vacio y lo metemos en el localStorage
    if(comentarios === null || comentarios === undefined || comentarios.length === 0){
        comentarios = [];
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }
    
    

    function guardar(){
        let nombre = document.getElementById("nombre-form").value;
        let email = document.getElementById("email-form").value;
        let comentario = document.getElementById("comentario-form").value;
    
       let form = {
            nombre: nombre,
            email: email,
            comentario: comentario
        };
    
       
        
        comentarios.push(form);

        
    
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }
   
   
    


    function eliminar(comentario){
       
       
        comentarios.filter(item => {
            if(item.email === comentario.email){
                comentarios.splice(comentarios.indexOf(item), 1);
                localStorage.setItem("comentarios", JSON.stringify(comentarios));
                console.log(comentarios);
            }
                
                
        });
        setEstado(true);

        document.location.reload(estado);
      
       
    }

   useEffect(() => {
    setEstado(false);
    
   }, [comentarios]);
    
    //Con esta Obtenemos los datos y los listamos
    var comentario = JSON.parse(localStorage.getItem("comentarios")) ;
   
    const libro = JSON.parse(localStorage.getItem("libro"));
  
    return (
        <section className="section-comentario">
        <h2>Formulario</h2>
        <form>
                <label>Nombre:</label>
                <input id="nombre-form" type="text" placeholder="Nombre"/>
                <label>Email:</label>
                <input id="email-form" type="text" placeholder="Email"/>
                <label>Comentario:</label>
                <textarea id="comentario-form" placeholder="Comentario"></textarea>
                <button  id='btn-verde' type="submit" onClick={()=> {guardar()}}>Enviar</button>
        </form> 
        <div className='table-container'>
            <h1>Lista de Comentarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Comentario</th>
                        <th>Opcion</th>
                    </tr>
                </thead>
                <tbody>
                    {comentario.map(comentario => {
                        return(
                            <tr>
                                <td>{comentario.nombre}</td>
                                <td>{comentario.email}</td>
                                <td>{comentario.comentario}</td>
                                <td><button type="button" onClick={()=>{eliminar(comentario)}}>ELIMINAR</button></td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>   

   </section>
    )
  
}
