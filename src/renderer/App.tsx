import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './Global.css';

import HeaderLeft from './Client/Components/HeaderLeft/Header'
import Header from './Client/Components/Header/Header'

import Index from './Client/Pages/Index/Index'
import CasamentosPage from './Client/Pages/CasamentosPage/Casamento'
import FormularioCasamento from './Client/Pages/CasamentosPage/Formulario/Formalurio'
import ModificarCasamento from './Client/Pages/CasamentosPage/Modificar/Modificar'
import InfoPage from './Client/Pages/InfoPage/Info'

export default function App() {
  return (
    <>
      <Header />
      <HeaderLeft />
      <main>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/casamentos" element={<CasamentosPage />} />
            <Route path="/info-page/:id" element={<InfoPage />} />
            <Route path="/adicionar-casamento" element={<FormularioCasamento />} />
            <Route path="/modificar-casamento/:id" element={<ModificarCasamento />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
