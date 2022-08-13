
import "./Header.css";
import {Link} from "wouter";

export default function Header({ setCategoria, categoria }) {
    return (
        <header className="App-header">
                <div className="container-cover">
                        
                                <h1>UMG RESTAURANT</h1>
                                <form>
                                       
                                        <select id="libros" name="libros">
                                                <option value="Entradas">Entradas</option>
                                               
                                               
                                        </select>
                                        <input type="button" value="Buscar" onClick={()=>{
                                                setCategoria(document.getElementById("libros").value);
                                                console.log(categoria);
                                        }}/>
                                        <Link to="/pedidos"><input type="button" value="Ver Pedido"/></Link>
                                </form>
                                
                       
                </div>
        </header>
    );

}