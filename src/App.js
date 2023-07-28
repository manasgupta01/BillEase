import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, CallToAction, Home, ScrollToTop, SuggestionBox } from "./pages";
import Invoice from "./components/App";

import { Header,  Error } from "./pages";
import Newpage from "./pages/Newpage";


export default function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
             
                <Invoice />
             
            </React.Fragment>
          }
        ></Route>
        <Route path="/Newpages"
        element={
          <React.Fragment>
            <Newpage/>
          </React.Fragment>
        }
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
