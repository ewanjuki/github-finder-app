import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/UI/Alert";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AlertContext from "./store/alert/alert-context";

function App() {
  const { alert } = useContext(AlertContext);

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container px-3 pb-12 mx-auto">
          {alert && <Alert alert={alert} />}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/notfound" element={<NotFound />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
