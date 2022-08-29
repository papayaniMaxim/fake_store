import { Route, Routes } from "react-router-dom";
import Card from "./pages/Card";
import HomePage from "./pages/HomePage";
import Navigations from "./components/Navigations";
import useFetchProducts from "./hooks/useFetchProducts";
import { useEffect } from "react";
import getVisitorInfo from "./services/getVisitorInfo";

function App() {
    
    useFetchProducts()
    useEffect(() => getVisitorInfo(), [])
    
    return (
        <>
        <Navigations/>
        <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/card" element={<Card />} />
        </Routes>
      </>
  );
}

export default App;
