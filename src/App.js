import Navbar from './components/Navbar'
import './App.css';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import FixedWpp from './components/Whatsapp/FixedWpp';
import SeAuto from './pages/SeAuto';
import SeManual from './pages/SeManual';
import AcAuto from './pages/AcAuto';
import AcManual from './pages/AcManual';
import Manutencao from './pages/Manutencao';
import Residencial from './pages/Residencial';
import Comercial from './pages/Comercial';
import Industrial from './pages/Industrial';
import ManutencaoManual from './pages/ManutencaoManual'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <FixedWpp />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/empresa' element={<Empresa/>} />
        <Route path='/SeAuto' element={<SeAuto/>} />
        <Route path='/SeManual' element={<SeManual/>} />
        <Route path='/AcAuto' element={<AcAuto/>} />
        <Route path='/AcManual' element={<AcManual/>} />
        <Route path='/manutencao' element={<Manutencao/>} />
        <Route path='/ManutencaoManual' element={<ManutencaoManual/>} />
        <Route path='/residencial' element={<Residencial/>} />
        <Route path='/comercial' element={<Comercial/>} />
        <Route path='/industrial' element={<Industrial/>} />
      </Routes>
    </>
  );
}

export default App;
