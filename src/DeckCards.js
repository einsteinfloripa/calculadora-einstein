/* eslint-disable no-lone-blocks */
import React from "react";
import Card from "./Card";

export default function DeckCards() {
	// States Importantes
	const [somatoriosPerguntas, setSomatoriosPerguntas] = React.useState([
		0, 0, 0, 0, 0,
	]);
	const [alternativasMarcadasPerguntas, setAlternativasMarcadasPerguntas] =
		React.useState([
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
		]);
	const [somatoriosGabarito, setSomatoriosGabarito] = React.useState([
		0, 0, 0, 0, 0,
	]);
	const [alternativasMarcadasGabarito, setAlternativasMarcadasGabarito] =
		React.useState([
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false],
		]);
	const [numCards, setNumCards] = React.useState(0);
	const [numAlternativa, setNumAlternativa] = React.useState(0);
	const [passarPage, setPassarPage] = React.useState(0);

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

	React.useEffect(() => {
		setNumCards(prompt("Quantos cards você deseja?"));
		setNumAlternativa(prompt("Quantas alternativas você deseja?"));
	}, []);
	
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
					{/* Card Gabarito */}
					<Card
						alterarSomatorio={(valorAlternativa) => {
							let arrayControle = [...somatoriosGabarito];
							arrayControle[passarPage] =
								arrayControle[passarPage] + valorAlternativa;
							setSomatoriosGabarito([...arrayControle]);
						}}
						somatorio={somatoriosGabarito[passarPage]}
						numAlternativas={numAlternativa}
						numCards={"Gabarito"}
						alternativasMarcadas={alternativasMarcadasGabarito[passarPage]}
						alterarAlternativa={(indexAlternativa) => {
							let arrayControle = [...alternativasMarcadasGabarito];
							arrayControle[passarPage][indexAlternativa] =
								!arrayControle[passarPage][indexAlternativa];
							setAlternativasMarcadasGabarito([...arrayControle]);
						}}
						key={`G`}
					/>
					{passarPage < numCards - 1 ? icones.avancar : <></>}
				</>
			}
		</div>
	);
}
