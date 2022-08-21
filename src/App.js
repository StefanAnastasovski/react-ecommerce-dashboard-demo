import React from "react";
import { MainLayout } from "./layout";

import Dashboard from "./pages/Dashboard";

const App = () => {
  return <MainLayout page={<Dashboard />} />;
};

export default App;
