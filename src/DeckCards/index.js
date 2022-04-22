import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import CardsContext from "../App/CardsContext";
import transformarMapEmArray from "../Assests/scripts/transformarMapEmArray";
import Card from "./Card";
import "./estilos/estilo.css";

export default function DeckCards() {
	// States Importantes
	const { questoes, alternativas, alternativasMap } = useContext(CardsContext);
	const [passarPage, setPassarPage] = useState(0);
	const [cardQuestoes, setCardQuestoes] = useState(new Map());
	const [cardGabaritos, setCardGabaritos] = useState(new Map());
	const [cardQuestoesArray, setCardQuestoesArray] = useState([]);
	const [cardGabaritoArray, setCardGabaritoArray] = useState([]);

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

			cardQuestoes.set(
				arrumaIndex,
				<Card
					numCards={`Questão ${arrumaIndex}`}
					numAlternativas={numAlternativas}
					key={`C ${arrumaIndex}`}
					id={`Q${arrumaIndex}`}
				/>,
			);
			cardGabaritos.set(
				arrumaIndex,
				<Card
					numCards={`Gabarito ${arrumaIndex}`}
					numAlternativas={numAlternativas}
					key={`G ${arrumaIndex}`}
					id={`G${arrumaIndex}`}
				/>,
			);
		});
		setCardQuestoes(new Map(cardQuestoes));
		setCardGabaritos(new Map(cardGabaritos));
		setCardQuestoesArray([...cardQuestoes.values()]);
		setCardGabaritoArray([...cardGabaritos.values()]);
	}, []);

	return (
		<>
			<div className='cards'>
				<Link to='/'>
					<div className='back'>
						<ion-icon name='chevron-back'></ion-icon>
						<p>Retornar</p>
					</div>
				</Link>
				{
					<>
						{passarPage > 0 ? icones.retornar : <></>}
						{cardQuestoesArray[passarPage]}
						{cardGabaritoArray[passarPage]}
						{passarPage < questoes.size - 1 ? icones.avancar : <></>}
						{passarPage === questoes.size - 1 ? (
							<button
								className='button button--pandora fadeInUp'
								onClick={() =>
									transformarMapEmArray(alternativasMap, questoes)
								}>
								<span>Calcular Nota</span>
							</button>
						) : (
							<></>
						)}
					</>
				}
			</div>
		</>
	);
}
