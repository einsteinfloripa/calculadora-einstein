import { useState, useContext } from "react";
import CardsContext from "../App/CardsContext";

// Função para construção do card (juntar tudo)
export default function Card({ numCards, numAlternativas, id }) {
	const { alternativasMap } = useContext(CardsContext);
	const [alternativasSelecionada, setAlternativasSelecionadas] = useState(
		new Map(alternativasMap.get(id)),
	);

	return (
		<div className='card fadeInUp' id={id}>
			<div className='topo-card'>
				<span>
					<p className='titulo'>{numCards}</p>
					<p className='paragrafo'>
						Selecione abaixo as proposições que você considera corretas
					</p>
				</span>
			</div>
			<div className='meio-card'>
				<MeioAlternativas
					numAlternativas={numAlternativas}
					id={id}
					alternativasSelecionada={alternativasSelecionada}
					setAlternativasSelecionadas={(valor) => {
						const jaTemValor = alternativasSelecionada.has(valor);
						if (jaTemValor) {
							alternativasSelecionada.delete(valor);
							setAlternativasSelecionadas(new Map(alternativasSelecionada));
						} else {
							alternativasSelecionada.set(valor, true);
							setAlternativasSelecionadas(new Map(alternativasSelecionada));
						}
					}}
				/>
			</div>
			<div className='base-card'>
				<div>
					<p>Sua Resposta</p>
					<div className='sua-resposta'>
						<p>
							{[...alternativasSelecionada.keys()].reduce(
								(last, current) => last + current,
								0,
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function MeioAlternativas({
	numAlternativas,
	id,
	alternativasSelecionada,
	setAlternativasSelecionadas,
}) {
	//Variaveis
	const valoresAlternativas = [1, 2, 4, 8, 16, 32, 64];
	const arrayAlternativasDesejadas = valoresAlternativas.filter((element) => {
		return element <= valoresAlternativas[numAlternativas - 1];
	});

	return arrayAlternativasDesejadas.map((element, index) => {
		return (
			<div className='alternativa' key={index}>
				<p>{element}</p>
				<GerarLogoSVG
					id={id}
					alternativaValor={element}
					alternativasSelecionada={alternativasSelecionada}
					setAlternativasSelecionadas={setAlternativasSelecionadas}
				/>
			</div>
		);
	});
}

function GerarLogoSVG({
	id,
	alternativaValor,
	alternativasSelecionada,
	setAlternativasSelecionadas,
}) {
	const { alternativasMap, setAlternativasMap } = useContext(CardsContext);

	return (
		<>
			<svg
				fill='white'
				version='1.0'
				xmlns='http://www.w3.org/2000/svg'
				width='60px'
				height='60px'
				viewBox='0 0 330.000000 293.000000'
				preserveAspectRatio='xMidYMid meet'
				onClick={() => {
					const somatorio = [...alternativasSelecionada.keys()].reduce(
						(last, current) => last + current,
						0,
					);
					const menorQue99 = somatorio + alternativaValor <= 99;
					const jaSelecionado = alternativasSelecionada.has(alternativaValor);
					if (menorQue99 && !jaSelecionado) {
						setAlternativasSelecionadas(alternativaValor);
						alternativasMap.set(id, alternativasSelecionada);
						setAlternativasMap(new Map(alternativasMap));
					} else if (jaSelecionado) {
						setAlternativasSelecionadas(alternativaValor);
						alternativasMap.set(id, alternativasSelecionada);
						setAlternativasMap(new Map(alternativasMap));
					} else {
						alert("A soma deve ser menor que 99");
					}
				}}
				className={`${
					alternativasSelecionada.has(alternativaValor) ? "selecionado" : ""
				}`}>
				<g
					transform='translate(0.000000,293.000000) scale(0.100000,-0.100000)'
					stroke='black'
					strokeWidth='70px'>
					<path
						d='M1910 2772 c-133 -38 -247 -98 -347 -184 -112 -95 -173 -190 -173
-268 0 -41 -1 -42 -27 -36 -16 4 -89 9 -164 13 -109 4 -151 2 -213 -11 -158
-36 -309 -137 -380 -254 -43 -73 -53 -104 -81 -265 -30 -172 -55 -238 -118
-304 -57 -61 -111 -89 -196 -105 -34 -6 -61 -17 -61 -23 0 -6 18 -19 40 -29
24 -11 66 -47 107 -94 170 -192 211 -222 301 -222 17 0 32 -3 32 -6 0 -3 -11
-24 -25 -47 -53 -91 -106 -269 -120 -406 l-7 -63 38 7 c48 9 134 9 280 0 93
-6 116 -4 143 9 46 24 71 71 71 133 0 76 -5 83 -56 83 -87 0 -144 43 -144 107
0 18 9 57 20 87 17 44 30 61 67 85 56 37 79 39 127 6 l36 -24 0 34 c0 43 26
165 43 207 17 39 186 205 277 273 36 26 99 65 140 86 41 21 86 47 100 58 l25
20 48 -45 c94 -89 234 -134 420 -134 l107 0 0 -39 c0 -66 29 -209 57 -282 l27
-69 46 0 c81 0 140 -60 140 -143 0 -40 -35 -98 -69 -112 -20 -9 -22 -15 -17
-53 8 -61 47 -133 85 -159 43 -29 124 -38 208 -23 37 6 105 12 151 11 57 0 82
4 82 12 0 7 -13 65 -29 130 -34 134 -80 243 -122 283 l-29 27 48 32 c81 55
183 179 239 290 31 60 60 191 83 370 12 88 26 180 31 204 13 60 1 71 -48 44
-54 -30 -154 -46 -243 -38 -172 14 -290 43 -423 100 -70 30 -147 61 -172 67
-54 15 -56 28 -19 108 l25 55 -21 17 c-12 10 -38 20 -58 23 -63 11 -62 10 -62
78 0 124 55 235 147 296 39 26 41 29 25 43 -48 42 -85 52 -207 55 -92 2 -135
-1 -185 -15z'
					/>
					<path
						d='M1384 632 c-28 -10 -73 -35 -102 -55 l-51 -38 -25 43 c-21 35 -26 39
-26 20 0 -13 7 -37 16 -54 15 -29 15 -32 -14 -72 -45 -63 -61 -99 -77 -177
-19 -87 -11 -100 40 -70 48 28 55 27 55 -9 0 -38 22 -39 90 -5 59 30 60 30 60
6 0 -28 6 -29 93 -18 69 8 83 7 120 -9 33 -15 64 -19 162 -18 66 1 161 5 212
9 77 6 92 10 96 26 5 18 7 18 41 4 42 -18 53 -14 67 22 7 19 14 23 32 18 12
-4 32 -16 44 -27 13 -12 29 -18 38 -14 33 12 0 157 -59 262 -24 43 -24 43 -4
61 33 29 69 113 49 113 -5 0 -12 -9 -16 -19 -3 -10 -19 -38 -36 -61 l-30 -41
-37 32 c-47 42 -124 76 -189 85 -49 6 -53 5 -53 -14 0 -25 -43 -78 -79 -96
-93 -48 -210 -9 -247 81 -14 31 -17 33 -67 33 -28 -1 -75 -9 -103 -18z'
					/>
				</g>
			</svg>
		</>
	);
}
