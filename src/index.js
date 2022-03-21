import ReactDom from "react-dom";
import DeckCards from "./DeckCards";

function App() {
	let numCards = prompt("Quantos cards você deseja?");
	let numAlternativa = prompt("Quantas alternativas você deseja?");
	
	return <DeckCards numCards={numCards} numAlternativa={numAlternativa}/>;
}

ReactDom.render(App(), document.querySelector(".root"));
