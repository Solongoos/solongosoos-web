import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";

function App() {
	return (
  <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
	);
}

export default App;
