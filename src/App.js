import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import CommentsPage from "./components/CommentsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <NavBar /> */}
        <div className="sub-App">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div>
                  <HomePage />
                </div>
              }
            />
            {/* <Route
              path="/Blog"
              element={
                <div>
                  <Blogs items={Blogs} />
                </div>
              }
            /> */}
            <Route path="/CommentsPage" element={<CommentsPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
