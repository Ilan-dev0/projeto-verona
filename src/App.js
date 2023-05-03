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
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <FixedWpp />

        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/empresa' element={<Empresa />} />
          <Route exact path='/SeAuto' element={<SeAuto />} />
          <Route exact path='/SeManual' element={<SeManual />} />
          <Route exact path='/AcAuto' element={<AcAuto />} />
          <Route exact path='/AcManual' element={<AcManual />} />
          <Route exact path='/manutencao' element={<Manutencao />} />
          <Route exact path='/ManutencaoManual' element={<ManutencaoManual />} />
          <Route exact path='/residencial' element={<Residencial />} />
          <Route exact path='/comercial' element={<Comercial />} />
          <Route exact path='/industrial' element={<Industrial />} />
        </Routes>

    </>
  );
}

export default App;
