import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Tasks from "./pages/tasks";
import About from "./pages/about";
import Navbar from "./components/Layouts/Navbar/Navbar";
import Footer from "./components/Layouts/Footer/footer";

const App = () => {
  return (
    <Suspense fallback="loading">
      <Router>
        <div className="app-container-bnw">
          <Navbar />
          <div className="appcontainer">
            <Routes>
              <Route exact path="/" element={<Tasks />} />
              <Route exact path="/about" element={<About />} />{" "}
            </Routes>
          </div>
          <Footer />
        </div>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </Suspense>
  );
};

export default App;
