import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { PagesRoot } from "./pages/Root";
import { LoginContextProvider } from "./context/LoginContext";

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <PagesRoot />
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
