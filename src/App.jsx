import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { PagesRoot } from "./pages/Root";
import { LoginContextProvider } from "./context/LoginContext";
import { RegisterContextProvider } from "./context/RegisterContext";

function App() {
  return (
    <BrowserRouter>
      <RegisterContextProvider>
        <LoginContextProvider>
          <PagesRoot />
        </LoginContextProvider>
      </RegisterContextProvider>
    </BrowserRouter>
  );
}

export default App;
