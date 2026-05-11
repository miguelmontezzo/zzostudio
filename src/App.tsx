import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IAServicePage from "./pages/IAServicePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ia-service" replace />} />
        <Route path="/ia-service" element={<IAServicePage />} />
        <Route path="*" element={<Navigate to="/ia-service" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
