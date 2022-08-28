import React from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "./layout";
import Catalogue from "./pages/Catalogue";
import Catalogn1 from "./pages/Catalogue/catalogs/Catalogn1";
import Catalogn2 from "./pages/Catalogue/catalogs/Catalogn2";
import Catalogn3 from "./pages/Catalogue/catalogs/Catalogn3";

import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/catalog-n1" element={<Catalogn1 />} />
        <Route path="/catalogue/catalog-n2" element={<Catalogn2 />} />
        <Route path="/catalogue/catalog-n3" element={<Catalogn3 />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Dashboard /> */}
    </MainLayout>
  );
};

export default App;
