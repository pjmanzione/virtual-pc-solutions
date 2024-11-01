import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ClimbingBoxLoader, PuffLoader } from "react-spinners";
import ScrollToTop from "./components/ScrollToTop"; // import the ScrollToTop component
import Home from "./pages/Home";

// import SignUp from "./components/pages/SignUp";
import GoogleAppsheet from "./pages/Google/GoogeleAppsheet";
import RemoteSupport from "./pages/Remote/RemoteSupport";
import CloudSupport from "./pages/Cloud/CloudSupport1";
import Footer from "./components/Footer";
import ContactForm from "./pages/ContactUs";
import RemoteSalesForm from "./pages/Remote/RemoteSalesForm";
import FAQ from "./pages/FAQ";
import TermsAndConditions from "./pages/TermsAndCondtions";
import AboutUs from "./pages/AboutUs";

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#1B1818");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <PuffLoader cssOverride={override} />
      ) : (
        <Router>
          <Navbar></Navbar>
          <ScrollToTop />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route
              path="/remote-support"
              exact
              element={<RemoteSupport />}
            ></Route>

            {/* <Route path="/signup" exact element={<SignUp />}></Route> */}
            <Route path="/contact-us" exact element={<ContactForm />}></Route>
            <Route path="/faq" exact element={<FAQ />}></Route>
            <Route path="/terms" exact element={<TermsAndConditions />}></Route>
            <Route path="/about" exact element={<AboutUs />}></Route>
            <Route
              path="/sales-form"
              exact
              element={<RemoteSalesForm />}
            ></Route>
            <Route
              path="/google-appsheet"
              exact
              element={<GoogleAppsheet />}
            ></Route>
            <Route path="/cloud-support" element={<CloudSupport />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
          </Routes>

          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
