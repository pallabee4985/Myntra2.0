import './App.css';
import Nav from './Component/Nav';
import {Routes,Route} from 'react-router-dom'
import Home from './Component/Home'; 
import About from './Component/About';
import Product from './Component/Product';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import ProductContext from './Context/ProductContext';
import Home1 from './Context/Home1';

function App() {
  return (
   <>
   {/* <ProductContext>
    <Home1/>
   </ProductContext> */}
   <Nav/>
   <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
   </>
  );
}


export default App;
