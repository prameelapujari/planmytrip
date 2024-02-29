import PlanYourTrip from "./pages/PlanMyTrip";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Plan from "./pages/Plan";
import PointOfOInterest from "./pages/PointOfInterest";
import JourneySummary from "./pages/JourneySummary";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import "./App.css";

function App(){
  return(
   <BrowserRouter>
   <div className="App">
    <div id="page-body">
   <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<PlanYourTrip/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/places" element={<Places/>}></Route>
      <Route path="/plans" element={<Plan/>}></Route>
      <Route path="/poi" element={<PointOfOInterest/>}></Route>
      <Route path="/journey" element={<JourneySummary/>}></Route>
    </Routes>
    </div>
    </div>
  </BrowserRouter>

  );
}

export default App;