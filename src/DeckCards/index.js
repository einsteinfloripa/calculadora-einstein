import { useState, useContext, useEffect } from "react";

import CardsContext from "../App/CardsContext";
import Card from "./Card";
import "./estilos/estilo.css";

export default function DeckCards() {
	// States Importantes
	const { questoes, alternativas } = useContext(CardsContext);
	const [passarPage, setPassarPage] = useState(0);
	const [cardMap, setCardMap] = useState(new Map());
	const [cardArray, setCardArray] = useState([]);
	// Variaveis Importatnes
	const icones = {
		avancar: (
			<ion-icon
				name='chevron-forward-circle'
				class='avancar'
				onClick={() => {
					setPassarPage(passarPage + 1);
				}}></ion-icon>
		),
		retornar: (
			<ion-icon
				name='chevron-back-circle'
				class='retornar'
				onClick={() => {
					setPassarPage(passarPage - 1);
				}}></ion-icon>
		),
	};

	useEffect(() => {
		const arrayAlternativas = [...alternativas.values()];
		arrayAlternativas.forEach((element, index) => {
			const arrumaIndex = index + 1;
			const numAlternativas = alternativas.get(arrumaIndex);

			cardMap.set(
				arrumaIndex,
				<Card
					numCards={`Questão ${arrumaIndex}`}
					numAlternativas={numAlternativas}
					key={`Card ${arrumaIndex}`}
					id={`Question ${arrumaIndex}`}
				/>,
			);
		});
		setCardMap(cardMap);
		setCardArray([...cardMap.values()]);
	}, []);

	return (
		<div className='cards'>
			{
				<>
					{passarPage > 0 ? icones.retornar : <></>}
					{cardArray[passarPage]}
					{passarPage < questoes.size - 1 ? icones.avancar : <></>}
				</>
			}
		</div>
	);
}
