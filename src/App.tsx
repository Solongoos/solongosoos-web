import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
	return (
    <BrowserRouter>
      <main>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      </main>
    </BrowserRouter>
	);
}

export default App;
