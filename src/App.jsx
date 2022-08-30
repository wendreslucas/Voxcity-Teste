import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { PagesRoot } from "./pages/Root";
import { RegisterContextProvider } from "./context/RegisterContext";

function App() {
  return (
    <BrowserRouter>
      <RegisterContextProvider>
        <PagesRoot />
      </RegisterContextProvider>
    </BrowserRouter>
  );
}

export default App;
