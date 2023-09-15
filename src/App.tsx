import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import routes, { renderRoutes } from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </div>
  );
}

export default App;
