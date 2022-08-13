import logo from './logo.svg';
import './App.css';
import Principal from './pages/Principal/Principal';
import Pedido from '../src/pages/Pedido/Pedido';
import { Route } from 'wouter';
function App() {
  return (
    <div className="App">
      <Route path="/"><Principal/></Route> 
      <Route path="/pedidos"><Pedido/></Route> 
    </div>
  );
}

export default App;
