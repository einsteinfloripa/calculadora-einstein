import ReactDom from "react-dom";
import Card from "./Card";

function App() {
    let gerarCards = () => {
        let numCards = prompt("Quantos cards você deseja?");
        let numAlternativa = prompt('Quantas alternativas você deseja?')
        let cards = [];
		for (let i = 0; i < numCards; i++) {
			cards.push(<Card numAlternativas={numAlternativa} numCards={i+1}/>);
		}
		return cards;
	};
	return <div className="cards">{gerarCards()}</div>;
}

const app = App();
ReactDom.render(app, document.querySelector(".root"));
