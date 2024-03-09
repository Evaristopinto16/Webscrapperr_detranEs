const vlorDebito =  "\n\t\t\tIPVA 6� Cota 2024\t\t\n\t\t\t26/09/2024\n\t\t\t286,74\t\t\n\t\t\t286,74\t\t\n\t\t\t0,00\n\t\t\t0,00\t\t\t\t\t\t\n\t\t\t0,00\n\t\t\t286,74\n\t\t\n\t\t\tIPVA 5� Cota 2024\t\t\n\t\t\t26/08/2024\n\t\t\t286,74\t\t\n\t\t\t286,74\t\t\n\t\t\t0,00\n\t\t\t0,00\t\t\t\t\t\t\n\t\t\t0,00\n\t\t\t286,74\n\t\t\n\t\t\tIPVA 4� Cota 2024\t\t\n\t\t\t18/07/2024\n\t\t\t286,74\t\t\n\t\t\t286,74\t\t\n\t\t\t0,00\n\t\t\t0,00\t\t\t\t\t\t\n\t\t\t0,00\n\t\t\t286,74\n\t\t\n\t\t\tIPVA 3� Cota 2024\t\t\n\t\t\t18/06/2024\n\t\t\t286,74\t\t\n\t\t\t286,74\t\t\n\t\t\t0,00\n\t\t\t0,00\t\t\t\t\t\t\n\t\t\t0,00\n\t\t\t286,74\n\t\t\n\t\t\tIPVA 2� Cota 2024\t\t\n\t\t\t16/05/2024\n\t\t\t286,74\t\t\n\t\t\t286,74\t\t\n\t\t\t0,00\n\t\t\t0,00\t\t\t\t\t\t\n\t\t\t0,00\n\t\t\t286,74\n\t\t\n\t\t\tIPVA 1� Cota 2024\t\t\n\t\t\t15/04/2024\n\t\t\t286,74\t\t\n\t\t\t286,74\t\t\n\t\t\t0,00\n\t\t\t0,00\t\t\t\t\t\t\n\t\t\t0,00\n\t\t\t286,74\n\t\t\n\t\t\tIPVA Cota �nica 2024\t\t\n\t\t\t15/04/2024\n\t\t\t1.720,44\t\t\n\t\t\t1.720,44\t\t\n\t\t\t258,07\n\t\t\t0,00\t\t\t\t\t\t\n\t\t\t0,00\n\t\t\t1.462,37\n\t\t"

 // Dividindo a string em entradas individuais
const cotas = vlorDebito.split('\n\t\t\t');

const saldoDebito = [
    '',
    'IPVA 6ª Cota 2024\t\t',
    '26/09/2024',
    '286,74\t\t',
    '286,74\t\t',
    '0,00',
    '0,00\t\t\t\t\t\t',
    '0,00',
    '286,74\n\t\t',
    'IPVA 5ª Cota 2024\t\t',
    '26/08/2024',
    '286,74\t\t',
    '286,74\t\t',
    '0,00',
    '0,00\t\t\t\t\t\t',
    '0,00',
    '286,74\n\t\t',
    'IPVA 4ª Cota 2024\t\t',
    '18/07/2024',
    '286,74\t\t',
    '286,74\t\t',
    '0,00',
    '0,00\t\t\t\t\t\t',
    '0,00',
    '286,74\n\t\t',
    'IPVA 3ª Cota 2024\t\t',
    '18/06/2024',
    '286,74\t\t',
    '286,74\t\t',
    '0,00',
    '0,00\t\t\t\t\t\t',
    '0,00',
    '286,74\n\t\t',
    'IPVA 2ª Cota 2024\t\t',
    '16/05/2024',
    '286,74\t\t',
    '286,74\t\t',
    '0,00',
    '0,00\t\t\t\t\t\t',
    '0,00',
    '286,74\n\t\t',
    'IPVA 1ª Cota 2024\t\t',
    '15/04/2024',
    '286,74\t\t',
    '286,74\t\t',
    '0,00',
    '0,00\t\t\t\t\t\t',
    '0,00',
    '286,74\n\t\t',
    'IPVA Cota Única 2024\t\t',
    '15/04/2024',
    '1.720,44\t\t',
    '1.720,44\t\t',
    '258,07',
    '0,00\t\t\t\t\t\t',
    '0,00',
    '1.462,37\n\t\t'
  ];
  
  // Função para organizar os dados em objetos
  function organizarDadosIPVA(dados) {
    const ipvas = [];
    let ipvaAtual = {};
  
    for (let i = 0; i < dados.length; i++) {
      const dado = dados[i].trim();
  
      if (dado.startsWith('IPVA')) {
        if (Object.keys(ipvaAtual).length !== 0) {
          ipvas.push(ipvaAtual);
          ipvaAtual = {};
        }
        ipvaAtual.tipo = dado;
      } else {
        switch (i % 8) {
          case 1:
            ipvaAtual.dataVencimento = dado;
            break;
          case 3:
            ipvaAtual.valorOriginal = dado;
            break;
          case 4:
            ipvaAtual.valorDesconto = dado;
            break;
          case 5:
            ipvaAtual.valorAcrescimo = dado;
            break;
          case 7:
            ipvaAtual.valorFinal = dado;
            break;
        }
      }
    }
  
    // Adiciona o último IPVA à lista
    ipvas.push(ipvaAtual);
  
    return ipvas;
  }
  
  // Organiza os dados em objetos
  const ipvas = organizarDadosIPVA(cotas);
  console.log(ipvas);
 
  