import { useState, useContext } from "react";

import CardsContext from "../App/CardsContext";
import Card from "./Card";
import "./estilos/estilo.css";

export default function DeckCards() {
	// States Importantes
	const { questoes, alternativas } = useContext(CardsContext);

	const [somatoriosPerguntas, setSomatoriosPerguntas] = useState([
		0, 0, 0, 0, 0,
	]);
	const [alternativasMarcadasPerguntas, setAlternativasMarcadasPerguntas] =
		useState([
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
		]);
	const [somatoriosGabarito, setSomatoriosGabarito] = useState([0, 0, 0, 0, 0]);
	const [alternativasMarcadasGabarito, setAlternativasMarcadasGabarito] =
		useState([
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
		]);
	const [numAlternativa, setNumAlternativa] = useState(4);
	const [passarPage, setPassarPage] = useState(0);

	// Variaveis Importatnes
	let icones = {
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

	return (
		<div className='cards fadeInUp'>
			{
				<>
					{passarPage > 0 ? icones.retornar : <></>}
					{/* Card Perguntas */}
					<Card
						alterarSomatorio={(valorAlternativa) => {
							let arrayControle = [...somatoriosPerguntas];
							arrayControle[passarPage] =
								arrayControle[passarPage] + valorAlternativa;
							setSomatoriosPerguntas([...arrayControle]);
						}}
						somatorio={somatoriosPerguntas[passarPage]}
						numAlternativas={numAlternativa}
						numCards={`Questão ${passarPage + 1}`}
						alternativasMarcadas={alternativasMarcadasPerguntas[passarPage]}
						alterarAlternativa={(indexAlternativa) => {
							let arrayControle = [...alternativasMarcadasPerguntas];
							arrayControle[passarPage][indexAlternativa] =
								!arrayControle[passarPage][indexAlternativa];
							setAlternativasMarcadasPerguntas([...arrayControle]);
						}}
						key={`P`}
					/>
					{passarPage < questoes.size - 1 ? icones.avancar : <></>}
				</>
			}
		</div>
	);
}

