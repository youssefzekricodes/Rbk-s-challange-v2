import * as React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { RootState } from "./data/store/index";
import AddLinkPopUp from "./features/links/components/addLinkPopUp/AddLinkPopUp";
import routes, { renderRoutes } from "./Routes/routes";

function App() {
  const { modalOpen } = useSelector<RootState>((state) => state.modals);
  return (
    <div className="App">
      {modalOpen ? <AddLinkPopUp /> : null}
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </div>
  );
}

export default App;
