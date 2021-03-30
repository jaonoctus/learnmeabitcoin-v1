---
title: Como o Bitcoin Funciona?
position: 1
---

Bitcoin é um **sistema de pagamento eletrônico criado em 2009**. Ele permite enviar dinheiro para qualquer pessoa no mundo, sem a necessidade de uma autoridade central para emitir contas ou processar pagamentos.

Foi criado como uma solução para o sistema financeiro moderno, pelo qual um pequeno número de grandes bancos controla a emissão de contas e o processamento de transações. Isto centraliza o controle do dinheiro e força os usuários a confiarem nos bancos para agirem de forma responsável.

> "Os bancos devem ser confiáveis para segurar nosso dinheiro e transferi-lo eletronicamente, mas emprestam-no em ondas de bolhas de crédito com apenas uma fração em reserva." - [Satoshi Nakamoto](https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/)

O abuso desta confiança e a crise financeira resultante de 2007 inspiraram o desenvolvimento do Bitcoin, que funciona como um sistema de pagamento sem um ponto central de controle. Bitcoin foi projetado anonimamente sob o pseudônimo Satoshi Nakamoto, e foi [lançado em janeiro de 2009](https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html).

A seguir, uma explicação simples de como funciona.

## O que é Bitcoin?

Bitcoin é apenas um **programa de computador**. Você pode baixá-lo e executá-lo em seu computador.

![image](/static/images/home/1_1_program.png)

Vai lá, [tente](https://bitcoin.org/en/download).

Quando você executar o programa, ele se conectará a outros computadores que também estão executando este programa, e eles começarão a compartilhar um arquivo com você. Este arquivo é chamado de [blockchain](TODO), e é basicamente uma grande lista de [transações](TODO).

![image](/static/images/home/1_2_network.png)

Quando uma nova transação entra na rede, ela é retransmitida de computador para computador até que todos tenham uma cópia da transação. Em intervalos de aproximadamente 10 minutos, um computador aleatório ([node](TODO)) na rede adicionará as últimas transações recebidas à blockchain, e compartilhará as atualizações com todos os outros na rede.

![image](/static/images/home/1_3_network_transactions.png)

Como resultado, o programa Bitcoin cria uma grande [rede](TODO) de computadores que se comunicam entre si para **partilhar um arquivo e atualizá-lo com novas transações**.
