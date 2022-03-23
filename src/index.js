import ReactDom from "react-dom";
import DeckCards from "./DeckCards";

function App() {
	return <DeckCards />;
}

ReactDom.render(App(), document.querySelector(".root"));
