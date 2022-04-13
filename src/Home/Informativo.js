import { useState } from "react";
import styled from "styled-components";

import "../Assests/animacoes.css";

function Informativo({ setIntro }) {
	const [swapFade, setSwapFade] = useState(false);
	return (
		<Corpo className={swapFade ? "fadeOut" : ""}>
			<CardInfo
				className={swapFade ? "fadeOut" : "fadeIn"}
				onClick={() => {
					setSwapFade(!swapFade);
					setIntro();
				}}></CardInfo>
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
	background-color: white;
	width: 350px;
	height: 500px;
	border-radius: 25px;
`;

export default Informativo;
