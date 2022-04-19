import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Alternativa from "../Home/Alternativa";
import DeckCards from "../DeckCards";
import Home from "../Home";
import CardsContext from "./CardsContext";

function App() {
	const [questoes, setQuestoes] = useState(new Map([[1, <Alternativa key={`Questao ${1}`} id={1}/>]]));
	const [alternativas, setAlternativas] = useState(new Map([[1, 1]]));
	const [alternativasMap, setAlternativasMap] = useState(new Map());
	const contexts = {
		questoes,
		setQuestoes,
		alternativas,
		setAlternativas,
		alternativasMap,
		setAlternativasMap,
	};
	return (
		<CardsContext.Provider value={contexts}>
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
