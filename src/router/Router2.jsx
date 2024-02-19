import { Route, Routes, Navigate } from "react-router-dom";
import { Patagonia } from "../pages/Patagonia";
import { NorthWest } from "../pages/NorthWest";
import { MyTrip } from "../pages/MyTrip";
import { Navbar } from "../components/Navbar";
import { Buy } from "../pages/Buy";

export const Router2 = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Routes>
        <Route path="patagonia" element={<Patagonia />} />
        <Route path="northwest" element={<NorthWest />} />
        <Route path="trip" element={<MyTrip />} />
        <Route path="destinations/:name" element={<Buy />} />
        <Route path="/" element={<Navigate to="patagonia" />} />
      </Routes>
    </>
  );
};
