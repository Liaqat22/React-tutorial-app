import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Hooks from './Component/Hooks';
import UseEffect from './Component/UseEffect';
import UseNavigate from './Component/UseNavigate';
import UseReducer from './Component/UseReducer';
import UseRef from './Component/UseRef';
import Usestate from './Component/Usestate';
import UseContext from './Component/UseContext'
import RFC from './Component/RFC';
import RCC from './Component/RCC';


const Firstname = createContext();
const Lastname = createContext()

function App() {
  document.body.style.background = "#183351"
  document.body.style.color = "white"
  const fname = 'Muhammad';
  const lname = "Siddique"
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/state' element={<Usestate />} />
          <Route path='/effect' element={<UseEffect />} />

          <Route path='/context' element={
            <Firstname.Provider value={fname}>
              <Lastname.Provider value={lname}>
                <UseContext />
              </Lastname.Provider >
            </Firstname.Provider>} />

          <Route path='/reducer' element={<UseReducer />} />
          <Route path='/ref' element={<UseRef />} />
          <Route path='/navigate' element={<UseNavigate />} />
          <Route path='/rfc' element={<RFC />} />
          <Route path='/rcc' element={<RCC heading=" this.props" />} />


        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
export { Firstname, Lastname }