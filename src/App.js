import React from "react";
import { MainLayout } from "./layout";

import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
};

export default App;
