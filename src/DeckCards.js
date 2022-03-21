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
	const [passarPage, setPassarPage] = React.useState(0);

	return (
		<div className='cards'>
			{
				<>
					{passarPage > 0 ? icones.retornar : <></>}
					<CardsPergunta numAlternativa={numAlternativa} numCards={numCards} passarPage={passarPage} />
					{passarPage < numCards - 1 ? icones.avancar : <></>}
				</>
			}
		</div>
	);
}

function CardsPergunta({ numAlternativa, numCards, passarPage }) {
	const cardsPergunta = [];

	for (let i = 0; i < numCards; i++) {
		cardsPergunta.push(
			<>
				<Card
					numAlternativas={numAlternativa}
					numCards={`Questão ${i + 1}`}
					key={`Q${i}`}
				/>
			</>,
		);
	}
	return cardsPergunta[passarPage];
}
function CardsGabarito() {
	const cardsGabarito = [];

	for (let i = 0; i < array.length; i++) {
		cardsGabarito.push(
			<>
				<Card
					numAlternativas={numAlternativa}
					numCards={"Gabarito"}
					key={`G${i}`}
				/>
			</>,
		);
	}
}
