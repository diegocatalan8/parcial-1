import { useState, useEffect } from 'react';
import Header from './../../components/header/Header';
import "./Principal.css";
import Footer from "./../../components/footer/Footer";
import { Link } from 'wouter';

export default function Principal() {

    const [categoria, setCategoria] = useState("Entradas");

    
  

  useEffect(() => {}, [categoria]);

  const entradas = [
    {
      categoria: "Entradas",
      entradas: [
        {
          name: 'Lasagna',
          price: '$10.00',
          description: 'Lasagna is a dish of Italian origin.',
          img:"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
      },

      {
          name: 'Puyaso',
          price: '$20.00',
          description: 'The cut is also popular with upscale restaurants in Guatemala and Costa Rica, where it is known as "puyaso."',
          img:"https://kreef.com/wp-content/uploads/2020/06/puyazo-1.jpg"

      },
      {
          name: 'Tilapia',
          price: '$15.00',
          description: 'Tilapia is an inexpensive, mild-flavored fish. It is the fourth most commonly consumed type of seafood in the United States.',
          img:"https://www.onceuponachef.com/images/2013/01/blackened-tilapia-1.jpg"
      },
      {
        name: 'Salmon',
        price: '$15.00',
        description: 'Tilapia is an inexpensive, mild-flavored fish. It is the fourth most commonly consumed type of seafood in the United States.',
        img:"https://www.onceuponachef.com/images/2013/01/blackened-tilapia-1.jpg"
    }
      ]

    },
    
  ];

  const [estado, setEstado] = useState(false);
    

   //Con Comentarios Guardamos 
    var pedidos = JSON.parse(localStorage.getItem("entrada")) ;
    
    

    //Si comentarios es null, lo inicializamos como array vacio y lo metemos en el localStorage
    if(pedidos === null || pedidos === undefined || pedidos.length === 0){
        pedidos = [];
        localStorage.setItem("entrada", JSON.stringify(pedidos));
    }
    
    

    function guardar(objeto){
        let nombre = objeto.name
        let precio = objeto.price
      
    
       let form = {
            nombre: nombre,
            precio: precio
        };
    
       
        
        pedidos.push(form);

        
    
        localStorage.setItem("entrada", JSON.stringify(pedidos));
    }
   
   
    
  return (
        <div>
        <Header setCategoria={setCategoria}  categoria={categoria}/>
          <main className='cover-white'>
                  <section className='container-zoom'>
                      <article>
                            <h2>{categoria}</h2>

                            <div className='container-entradas'>
                            {entradas.map(entrada => {

                              if(entrada.categoria === categoria){
                                return entrada.entradas.map(entrada => {
                                 
                                  
                                  return(
                                  
                                    
                                          <div className='entrada'>

                                          <img src={entrada.img} alt={entrada.name}/>
                                          <h3>{entrada.price}</h3>
                                          <p>{entrada.name}</p>
                                        
                                         <button className='btn-ordenar' onClick={()=>{guardar(entrada)}}>Ordenar</button>
                                        
                                         
                                         
                                          
                                          </div>
                                   
                                   
                                  )
                                })
                              }
                            })
                            
                          }
                          </div>
                      </article>
                  </section>
          </main>
         <Footer/>
        </div>
  );
}