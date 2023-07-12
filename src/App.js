import Footer from "./Component/Footer";
import ITconsulting from "./Component/ITconsulting";
import LandingPage from "./Component/LandingPage";
import ManageIT from "./Component/ManageIT";
import Cloud from "./Component/Cloud";
import DataManage from "./Component/DataManage";
import ITSecurity from "./Component/ITSecurity";
import ITTraining from "./Component/ITTraining";
import ITProject from "./Component/ITProject";
import Virtualization from "./Component/Virtualization";
import Network from "./Component/Network";
import Navbar from "./Component/Navbar";
import SoftwareDev from "./Component/SoftwareDev";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Whatsapp from "./Component/Whatsapp";
import About from "./Component/About";
import Career from "./Component/Career";
import Partners from "./Component/Partners";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <LandingPage /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/consulting" element={<ITconsulting />} />
          <Route path="/managed" element={<ManageIT />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/network" element={<Network />} />
          <Route path="/dataManage" element={<DataManage />} />
          <Route path="/software" element={<SoftwareDev />} />
          <Route path="/itProject" element={<ITProject />} />
          <Route path="/virtualization" element={<Virtualization />} />
          <Route path="/itTraining" element={<ITTraining />} />
          <Route path="/itSecurity" element={<ITSecurity />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
        <Footer />
        <Whatsapp />
      </Router>
    </>
  );
}

export default App;
