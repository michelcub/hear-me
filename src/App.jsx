import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./View/Home";

import {Navbar} from './Components/Navbar'
import { Head } from "./Components/Head";


function App() {
  return (
    <section className="flex w-screen h-screen overflow-hidden">
      
        <BrowserRouter basename="/">
          <Navbar/>
          <section className="flex flex-col w-full h-full">
            <Head/>
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
          </section>
         
        </BrowserRouter>
      
    </section>
  );
}
1
export default App;
