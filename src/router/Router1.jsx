import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Router2 } from "./Router2";
import RoutesPrivate from "./RoutesPrivate";


export const Router1 = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/*"
          element={
            <RoutesPrivate>
              <Router2 />
            </RoutesPrivate>
          }
        />
      </Routes>
    </>
  );
};
