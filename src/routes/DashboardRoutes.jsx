import { Home, Data, Profile } from "../pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Innecesario, mejor dejarlo en App.jsx
export const DashboardRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
