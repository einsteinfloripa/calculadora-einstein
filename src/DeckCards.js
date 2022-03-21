import Card from "./Card";

export default function DeckCards({ numAlternativa, numCards }) {
	let gerarCards = () => {
		let cards = [];
		for (let i = 0; i < numCards; i++) {
			cards.push(<Card numAlternativas={numAlternativa} numCards={`Questão ${i + 1}`} />);
		}
		return cards;
	};
	return (
		<div className="cards">
			{gerarCards()}
			<Card numAlternativas={numAlternativa} numCards={"Gabarito"}/>
		</div>
	);
}
