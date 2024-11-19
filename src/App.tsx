import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import Nav from "./common/nav/Nav";

function App() {
	return (
		<BrowserRouter>
			<main>
				<Nav />

				<Routes>
					<Route index element={<Home />} />
					<Route path="create" element={<Create />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
