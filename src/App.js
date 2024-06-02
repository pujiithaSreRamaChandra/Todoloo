import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import Pomodoro from "./Pomodoro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="content">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/Pomodoro" element={<Pomodoro></Pomodoro>} ></Route>
          </Routes>
        </Router>
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
