import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Stack from "./pages/Stack";
import Licence from "./pages/Licence";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import { useEffect,useState } from "react";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, SetLoading] = useState (true);

  useEffect(()=>{
    const timer =setTimeout(()=>{
      SetLoading(false)
    }, 3000);
    return () => clearTimeout(timer);  
  },[]);

  if (loading) {
    return  <SplashScreen/>;
  }
  
  return (
    <div className="md:flex">
      <BrowserRouter>
      <Sidebar/>
        <div className="md:ml-36 ml-0 lg:ml-52">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/licence" element={<Licence />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
