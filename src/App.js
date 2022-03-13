import { Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { GitHubContextProvider } from "./store/GitHubContext";

function App() {
  return (
    <GitHubContextProvider>
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayOut>
    </GitHubContextProvider>
  );
}

export default App;
