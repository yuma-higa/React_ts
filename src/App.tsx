// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import ProfileSelection from "./components/ProfileSelection";
import StudentPage from "./pages/StudentPage";
import CompanyPage from "./pages/CompanyPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<ProfileSelection />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
