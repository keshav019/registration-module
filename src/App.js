
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Details from './D1TM1/components/details/details';
import Personal from './D1TM1/components/personal/personal';
import Academics from './D1TM1/components/academics/academics';
import Address from './D1TM1/components/address/address';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details' element={ <Details /> } />
          {/* <Route path='/d2tm2'></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
