import { useState } from "react";
import styled from "styled-components";

import "../Assests/animacoes.css";

function Informativo({ setIntro }) {
	const [swapFade, setSwapFade] = useState(false);
	return (
		<Corpo className={swapFade ? "fadeOut" : ""}>
			<CardInfo className={swapFade ? "fadeOut" : "fadeIn"}>
				<TopoCard>
					<p>Bem-vindo!</p>
					<ion-icon
						name='close-circle-outline'
						onClick={() => {
							setSwapFade(!swapFade);
							setIntro();
						}}></ion-icon>
				</TopoCard>
				<MeioCard>
					<p>
						Olá pessoinha maravilhosa! Seja bem vindo a{" "}
						<span>caculadora UFSC do EinsteinFloripa!</span> Nosso objetivo com
						essa calculadora é facilitar a sua vida na hora de calcular sua
						nota, pois sabemos que as vezes entender a fórmula é um pouco
						díficil.
					</p>
					<p className='uso'>Como usar?</p>
					<p className="instrucoes">
						Você pode adicionar/remover a quantidade de questões e deve
						escolher o número de alternativas que deseja por questão
					</p>
					<p className='formula'>Fórmula Utilizada</p>
					<img src='https://i.imgur.com/3QUoWLF.png?1' alt='formula' />
					<p className='report'>
						Caso você encontre algum bug, queira dar um feedback ou sugestão de
						nova implementação, por favor{" "}
						<a href='https://forms.gle/m8ngqYZfZDsHDmL89' target='_blank'>
							clique aqui!
						</a>
					</p>
				</MeioCard>
				<BaseCard></BaseCard>
			</CardInfo>
		</Corpo>
	);
}

const Corpo = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
	background-color: #0000005c;
	width: 100vw;
	min-height: 100%;
`;
const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 500px;
	height: 600px;
	border-radius: 25px;
`;
const TopoCard = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 25px 25px 0px 25px;
	width: 100%;
	p {
		font-family: "Roboto", sans-serif;
		font-weight: 700;
		font-size: 30px;
	}

	ion-icon {
		font-size: 35px;
	}
`;
const MeioCard = styled.div`
	margin-top: 5px;
	margin-left: 25px;
	margin-right: 25px;
	p {
		text-align: justify;
		font-family: "Roboto", sans-serif;
		font-size: 16px;
		line-height: 25px;
	}
	span {
		font-weight: 700;
	}
	.formula {
		margin-top: 10px;
		font-size: 24px;
		font-weight: 700;
	}
	.uso {
		margin-top: 10px;
		font-size: 24px;
		font-weight: 700;
	}
	.instrucoes {
		margin-top: 5px;
	}
	img {
		margin-top: 20px;
	}
	.report {
		margin-top: 15px;
	}
`;
const BaseCard = styled.div``;

export default Informativo;
