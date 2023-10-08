import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { routes } from "../constants";
import "./App.css";

function App() {
  let element = useRoutes(
    routes.map((route) => ({
      path: route.path,
      element: <route.element />,
    }))
  );

  return (
    <div className="App">
      <div className="wrapper">
        <Navbar routes={routes} />
        <main>{element}</main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
