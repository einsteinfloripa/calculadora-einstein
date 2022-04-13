import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import DeckCards from "../DeckCards";
import Home from "../Home";
import CardsContext from "./CardsContext";

function App() {
	const [questoes, setQuestoes] = useState(new Map());
	const [alternativas, setAlternativas] = useState(new Map)
	return (
		<CardsContext.Provider value={{ questoes, setQuestoes, alternativas, setAlternativas }}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/calculadora' element={<DeckCards />} />
				</Routes>
			</BrowserRouter>
		</CardsContext.Provider>
	);
}

export default App;
