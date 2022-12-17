import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import { Customers, Dashboard, Layout, Products } from "./pages";

const App = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transactions" element={<h1>Transactions</h1>} />
          <Route path="/geography" element={<h1>Geography</h1>} />
          <Route path="/overview" element={<h1>Overview</h1>} />
          <Route path="/daily" element={<h1>Daily</h1>} />
          <Route path="/monthly" element={<h1>Monthly</h1>} />
          <Route path="/breakdown" element={<h1>Breakdown</h1>} />
          <Route path="/admin" element={<h1>Admin</h1>} />
          <Route path="/performance" element={<h1>Performance</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
export default App;
