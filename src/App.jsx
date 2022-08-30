import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { PagesRoot } from "./pages/Root";

function App() {
  return (
    <BrowserRouter>
      <PagesRoot />
    </BrowserRouter>
  );
}

export default App;
