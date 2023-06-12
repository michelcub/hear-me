import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard/Front/View/Dashboard.jsx";

import {Navbar} from './Dashboard/Front/Components/Navbar'
import { Head } from "./Dashboard/Front/Components/Head";


function App() {
  return (
    <section className="flex w-screen h-screen">
      
        <BrowserRouter basename="/">
          <Navbar/>
          <section className="flex flex-col w-full h-full">
            <Head/>
          <Routes>
            <Route path="" element={<Dashboard />} />
          </Routes>
          </section>
         
        </BrowserRouter>
      
    </section>
  );
}
1
export default App;
