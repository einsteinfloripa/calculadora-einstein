function calculadora(resposta, gabarito) {
	let pontuacoes = [];
	[resposta].forEach((respostaAluno) => {
		let pontuacaoFinalAluno = 0;
		for (let i = 0; i < respostaAluno.length; i++) {
			let NPC = 0,
				NPI = 0,
				NTPC = 0,
				NP = 7,
				P = 0,
				questaoAluno = respostaAluno[i],
				questaoGabarito = gabarito[i];
			for (let j = 64; j >= 1; j /= 2) {
				if (questaoGabarito >= j) {
					if (questaoAluno >= j) {
						NPC++;
						questaoAluno -= j;
					}
					NTPC++;
					questaoGabarito -= j;
				} else if (questaoAluno >= j) {
					NPI++;
					questaoAluno -= j;
				}
			}
			if (NPC > NPI) {
				P = (NP - (NTPC - (NPC - NPI))) / NP;
				pontuacaoFinalAluno += parseInt((P * 100).toFixed());
			}
		}
		pontuacoes.push(pontuacaoFinalAluno / 100);
	});
	alert(`Sua nota é ${pontuacoes}`);
}
export default calculadora;