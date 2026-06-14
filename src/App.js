import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { Routes, Route, Navigate} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ProfessionsPage from "./pages/ProfessionsPage";
import TrainingPage from "./pages/TrainingPage";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/professions" element={<ProfessionsPage/>}/>
        <Route path="/training" element={<TrainingPage/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;



