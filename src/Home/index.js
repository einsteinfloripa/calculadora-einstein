import { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../Assests/logo-brancovertical.png";
import Informativo from "./Informativo";
import Alternativa from "./Alternativa";
import CardsContext from "../App/CardsContext";

import "./estilos/efeitoBotao.css";
import "./estilos/efeitoSeta.css"

function Home() {
	const { questoes, setQuestoes } = useContext(CardsContext);
	const [intro, setIntro] = useState(false);
	const [arrayQuestoes, setArrayQuestoes] = useState([...questoes.values()])
	function mostrarInstrucoes() {
		return intro ? (
			<></>
		) : (
			<Informativo
				setIntro={() =>
					setInterval(() => {
						setIntro(!intro);
					}, 500)
				}
			/>
		);
	}
	
	return (
		<Corpo>
			{mostrarInstrucoes()}
			<Conteudo>
				<img src={logo} alt='logo' onClick={() => {
					const key = questoes.size + 1;
					questoes.set(key, <Alternativa key={`Questao ${key}`} id={key}/>);
					setQuestoes(questoes);
					setArrayQuestoes([...questoes.values()])
				}}/>
				{arrayQuestoes.map(element => {return element})}
				<Link to="/calculadora">
					<button className='button button--pandora'>
						<span>Calculadora</span>
					</button>
				</Link>
			</Conteudo>
		</Corpo>
	);
}

const Corpo = styled.main`
	display: flex;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
	background-color: #011E30;
`;
const Conteudo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		height: 250px;
	}
`;

export default Home;