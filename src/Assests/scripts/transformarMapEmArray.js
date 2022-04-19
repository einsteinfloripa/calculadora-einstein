import calculadora from "./calculadora";

function transformarMapEmArray(map, questoes) {
	const arrayQuestoes = [];
	const arrayGabaritos = [];

	for (let i = 0; i < questoes.size; i++) {
		const questaoAtual = map.get(`Q${i + 1}`) === undefined ? 0 : map.get(`Q${i + 1}`);
		const gabaritoAtual = map.get(`G${i + 1}`) === undefined ? 0 : map.get(`G${i + 1}`);

		const somatorioQuestao = questaoAtual === 0 ? 0 : [...questaoAtual.keys()].reduce(
			(last, current) => last + current,
			0,
		);
		const somatorioGabarito = gabaritoAtual === 0 ? 0 : [...gabaritoAtual.keys()].reduce(
			(last, current) => last + current,
			0,
		);
		arrayQuestoes.push(somatorioQuestao);
		arrayGabaritos.push(somatorioGabarito);
	}

	calculadora(arrayQuestoes, arrayGabaritos);
}
export default transformarMapEmArray;
