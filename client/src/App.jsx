import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PerformanceProvider from "./context/PerformanceContext";

import Dashboard from "./pages/Dashboard";
import CheckIn from "./pages/CheckIn";
import Analytics from "./pages/Analytics";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";

function App() {
  return (
    <PerformanceProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/checkin" element={<CheckIn />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </PerformanceProvider>
  );
}

export default App;
