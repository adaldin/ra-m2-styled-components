import Home from '../components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export const DashboardRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/data" element={<Data />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
