/* eslint-disable no-lone-blocks */
import React from "react";
import Card from "./Card";

export default function DeckCards({ numAlternativa, numCards }) {
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
    const [guardaSomatorio, setGuardaSomatorio] = React.useState(0);
	const cardsPergunta = [];
	const cardsGabarito = [];

	const [passarPage, setPassarPage] = React.useState(0);
	let gerarCards = () => {
		for (let i = 0; i < numCards; i++) {
            let teste = i
			cardsPergunta.push(
				<>
					<Card
						numAlternativas={numAlternativa}
						numCards={`Questão ${i + 1}`}
						key={`${teste}`}
					/>
				</>,
			);
			cardsGabarito.push(
				<>
					<Card
						numAlternativas={numAlternativa}
						numCards={"Gabarito"}
						key={`${teste+1}`}
					/>
				</>,
			);
		}
	};
	gerarCards();
	return (
		<div className='cards'>
			{
				<>
					{passarPage > 0 ? icones.retornar : <></>}
					{cardsPergunta[passarPage]}
					{cardsGabarito[passarPage]}
					{passarPage < numCards - 1 ? icones.avancar : <></>}
				</>
			}
		</div>
	);
}
