import { useState, useContext, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import logo from "../Assests/logo-brancovertical.png";
import Informativo from "./Informativo";
import Alternativa from "./Alternativa";
import CardsContext from "../App/CardsContext";

import "./estilos/efeitoTyping.css";
import "./estilos/efeitoBotao.css";
import "./estilos/efeitoSeta.css";

const day = dayjs().locale("pt-br").format("YYYY");

function Home() {
	const { questoes, setQuestoes, intro, setIntro, setAlternativasMap } =
		useContext(CardsContext);
	const [arrayQuestoes, setArrayQuestoes] = useState([...questoes.values()]);
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
	useEffect(() => {
		setAlternativasMap(new Map());
	}, []);

	useLayoutEffect(() => {
		const altura =
			document.getElementsByClassName("background")[0].offsetHeight;
		window.scroll({
			top: altura,
			left: 0,
			behavior: "smooth",
		});
	}, [questoes]);

	return (
		<Corpo className='background'>
			{mostrarInstrucoes()}
			<Conteudo>
				<img src={logo} alt='logo' />
				{arrayQuestoes.map((element) => {
					return element;
				})}
				<Botoes>
					<Link to='/calculadora'>
						<button className='button button--pandora'>
							<span>Calculadora</span>
						</button>
					</Link>
					<button
						className='button button--pandora'
						onClick={(e) => {
							const key = questoes.size + 1;
							questoes.set(
								key,
								<Alternativa key={`Questao ${key}`} id={key} />,
							);
							setQuestoes(new Map(questoes));
							setArrayQuestoes([...questoes.values()]);
						}}>
						<span>Adicionar Questão</span>
					</button>
					<button
						className='button button--pandora'
						onClick={() => {
							questoes.delete(questoes.size);
							setQuestoes(new Map(questoes));
							setArrayQuestoes([...questoes.values()]);
						}}
						disabled={questoes.size === 1}>
						<span>Remover Questão</span>
					</button>
				</Botoes>
				<div className='corps'>
					<p>&#169;{` ${day} Einstein Floripa Pré-Vestibulares`}</p>
					{intro ? (
						<div class='typewriter'>
							<p>Feito com &#10084;&#65039; pelo Vale do Silício</p>
						</div>
					) : (
						<></>
					)}
				</div>
			</Conteudo>
		</Corpo>
	);
}

const Corpo = styled.main`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
	z-index: 1;
	background-color: #011e30a9;
	.corps {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		bottom: 10px;
		p {
			margin: 3px;
			color: #fff;
			font-family: monospace;
			overflow: hidden;
			font-size: 15px;
		}
	}
`;
const Conteudo = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		height: 250px;
	}
`;
const Botoes = styled.div`
	display: flex;
	margin-bottom: 100px;
	button {
		margin: 20px;
	}
`;
export default Home;
