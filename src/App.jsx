import "./App.css";
import { Router1 } from "../src/router/Router1";
import  AuthProvider  from "./context/AuthProvider";


function App() {
  return (
    <>
      <AuthProvider>
        <Router1 />
      </AuthProvider>
    </>
  );
}

export default App;
