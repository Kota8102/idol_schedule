import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/home";
import About from '../page/about';
import Idols from '../page/idols';
import Privacy from '../page/privacy';
import NotFound from '../page/404';

const RouteManager:React.FC=() => {
    return (
      <>
       <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/idols" element={<Idols />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </>
    );
  }

export default RouteManager;