import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import CardsContext from "../App/CardsContext";

import "./estilos/efeitoSeta.css";

function Alternativa({ id }) {
	const { alternativas, setAlternativas } = useContext(CardsContext);
	const [numAlternativas, setNumAlternativas] = useState(
		alternativas.get(id) ? alternativas.get(id) : 1,
	);
	useEffect(() => {
		setNumAlternativas(numAlternativas);
		alternativas.set(id, numAlternativas);
		setAlternativas(new Map(alternativas));
	}, []);
	return (
		<Questao>
			<p>{`Questão ${id}`}</p>
			<Corpo>
				<button
					className='arrow left'
					onClick={() => {
						setNumAlternativas(numAlternativas - 1);
						alternativas.set(id, numAlternativas - 1);
						setAlternativas(new Map(alternativas));
					}}
					disabled={numAlternativas === 1}>
					<svg width='50px' height='50px' viewBox='0 0 50 80'>
						<polyline
							fill='none'
							stroke='#FFFFFF'
							strokeWidth='1'
							strokeLinecap='round'
							strokeLinejoin='round'
							points='45.63,75.8 0.375,38.087 45.63,0.375'
						/>
					</svg>
				</button>
				<div className='caixa'>{numAlternativas}</div>
				<button
					className='arrow right'
					onClick={() => {
						setNumAlternativas(numAlternativas + 1);
						alternativas.set(id, numAlternativas + 1);
						setAlternativas(alternativas);
					}}
					disabled={numAlternativas === 7}>
					<svg width='50px' height='50px' viewBox='0 0 50 80'>
						<polyline
							fill='none'
							stroke='#FFFFFF'
							strokeWidth='1'
							strokeLinecap='round'
							strokeLinejoin='round'
							points='0.375,0.375 45.63,38.087 0.375,75.8'
						/>
					</svg>
				</button>
			</Corpo>
		</Questao>
	);
}

const Questao = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		color: #000000;
		margin: 10px;
		font-family: "Roboto", sans-serif;
		font-size: 30px;
		font-weight: 700;
	}
`;

const Corpo = styled.div`
	display: flex;
	align-items: center;
	margin: 5px;
	.caixa {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70px;
		height: 70px;
		border-radius: 50px;
		background-color: #ffffff;

		font-family: "Roboto", sans-serif;
		font-size: 50px;
	}
`;
export default Alternativa;
