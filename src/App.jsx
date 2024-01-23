import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Frontend/Dashboard/Front/View/Dashboard.jsx";

import {Navbar} from './Frontend/Dashboard/Front/Components/Navbar'
import { Head } from "./Frontend/Dashboard/Front/Components/Head";
import { PatientsView } from "./Frontend/Patients/Front/View/PatientsView.jsx";


function App() {
  return (
    <section className="flex w-screen h-screen">
      
        <BrowserRouter basename="/">
          <Navbar/>
          <section className="flex flex-col w-full h-full">
            <Head/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<PatientsView/>} />
          </Routes>
          </section>
         
        </BrowserRouter>
      
    </section>
  );
}
1
export default App;
