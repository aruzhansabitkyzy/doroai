import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import { ModalProvider } from "./context/ModalContext";
import Profile from "./pages/Profile";

function App() {
  return (
    <ModalProvider>
    <div className="App font-nunito">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
    </ModalProvider>
  );
}

export default App;
