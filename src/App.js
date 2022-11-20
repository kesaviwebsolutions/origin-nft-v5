import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Component/Pages/Navbar";
import './App.css';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar />} />
   
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;