import { Route, Routes, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<h1>Home Page</h1>} />
      <Route path="*" element={<Navigate to="home" />} />
    </Routes>
  );
};
