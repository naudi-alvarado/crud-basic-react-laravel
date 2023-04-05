import './customcss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
         <header className='row bg-primary h-5 text-center pt-5 pb-5 '>
            <div className='col-sm-6 col-ls-12'><h1 className='text-white'>Crud con React y Laravel 9</h1></div>
       </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProducts/> } />
          <Route path='/create' element={ <CreateProduct/> } />
          <Route path='/edit/:id' element={ <EditProduct/> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
