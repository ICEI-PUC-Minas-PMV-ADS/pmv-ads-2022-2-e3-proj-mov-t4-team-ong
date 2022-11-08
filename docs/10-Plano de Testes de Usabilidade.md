# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação por meio da simulação de seus fluxos. Assim, é possível avaliar, interpretar e propor melhorias ou correções à experiência de usuários com o produto. Será considerada a abordagem das Heurísticas de Nielsen para o desenvolvimento e a avaliação das interfaces deste projeto, sendo elas:

   1. Visibilidade do status do sistema;
   2. Correspondência entre o sistema e o mundo real;
   3. Liberdade e controle do usuário;
   4. Consistência e padrões;
   5. Prevenção de erros;
   6. Reconhecer ao invés de lembrar;
   7. Flexibilidade e Eficiência;
   8. Estética e Design minimalista;
   9. Auxiliar usuários a reconhecer, diagnosticar e recuperar erros;
   10. Ajuda e Documentação.

Há ainda testes para verificar com usuários se os fluxos pensados estão funcionando, de modo a responder questões como:

- Quanto tempo e quantas etapas foram necessárias para que o usuário completasse tarefas básicas?
- Quantos erros a pessoa cometeu? Esses erros não tiveram solução intuitiva ou a pessoa conseguiu contornar a situação a partir de informações recebidas pelo sistema?
- Como a pessoa se sentiu depois de completar a tarefa? Sentimentos de satisfação ou estresse? Ela recomendaria o produto a um amigo?

Assim, para os testes de usabilidade, serão coletados dados _in person_ por meio de observações anotadas por um membro do grupo, encontrando participantes por conveniência. Conforme estudado por Nielsen, a aplicação será testada com, no mínimo, 6 usuários, já que essa quantidade é suficiente para identificar 85% de erros e melhorias a serem feitas. Considerando os resultados obtidos, o grupo adicionará com prioridade as alterações necessárias a _sprint_ em que estiver.

Assim, esses testes objetivam avaliar a qualidade da interface com o usuário da aplicação desenvolvida de modo a otimizar a experiência dos usuários, minimizando erros e melhorando os fluxos.


## Métricas

As métricas de usabilidade se referem à performance do usuário mediante a performance esperada. A tarefa do teste é finalizada quando o participante alcança seu objetivo. 

São considerados erros não-críticos os desvios do fluxo planejado, erros de confusão (como quando não ficou claro o tipo de input necessário/aceito). Caso o participante precise de ajuda ou obtenha valores incorretos aos pedidos na tarefa, consideram-se erros críticos. São comuns a todos os casos de teste as seguintes métricas, a serem complementadas com quaisquer observações relevantes feitas durante o teste:

- Finalização da tarefa
- Quantidade de erros por tarefa
- Tempo para completar a tarefa
- Feedback de como foi a experiência para os participantes, em uma pergunta aberta de modo a não influenciar sua resposta.

Em relação à severidade dos problemas encontrados, define-se seu impacto como alto na presença de erros críticos, moderado com a dificuldade mas finalização da tarefa e baixo caso os problemas encontrados sejam mínimos e em nada interfiram na finalização da tarefa. Também será considerada a frequência do problema: alta caso mais de 30% dos participantes encontrem-no, moderada se de 11% a 30%, e baixa se menos de 10% encontrem-no (0 participantes caso sejam encontradas até 10 pessoas).

## Avaliação

Será considerada a escala Likert para avaliação, de 1 a 5, sendo:

| Nota | Facilidade de uso (deduções por erros) |
| ---- |---- |
| 5 | O usuário não apresentou erros nem demora. |
| 4 | O usuário não apresentou erros, mas demorou para a finalização do teste. |
| 3 | O usuário encontrou 1 erro não-crítico nos fluxos ou precisou de uma ajuda simples. |
| 2 | O usuário encontrou erros não-críticos nos fluxos ou precisou de ajudas. |
| 1 | O usuário encontrou erros críticos ou obteve valores incorretos em um caso de teste. |

Assim, quando maior a nota, maior a facilidade de uso para o usuário.

## Testes de Usabilidade

| **Caso de Teste** | **CX-01: Cadastro de usuário (ONG)**|
|---|---|
| Objetivo do Teste | Verificar se as CTA (_call to action_) e fluxo de inserção de dados no sistema são claros para o usuário |
| Passos | 1.	Acessar o app <br>2.	Clicar no botão 'Quero me cadastrar';<br>3.	Inserir as informações cadastrais solicitadas; <br>4.	Clicar em 'Cadastrar' |
| Critérios de Êxito | •	A pessoa conseguiu executar a tarefa sem ajuda. <br> • É claro para o usuário qual o perfil de pessoa (funcionário da ONG /cliente) está sendo cadastrado  <br> •	Fica claro para o usuário que a inclusão foi realizada com sucesso |

| **Caso de Teste** | **CX-02: Login de usuário (ONG)**|
|---|---|
|Objetivo do Teste | Verificar se as CTA (_call to action_) e fluxo de acesso ao sistema são claros para o usuário|
|Passos | 1.	Acessar o app; <br>2.	Clicar no botão 'Quero entrar'; <br>3.	Preencher os dados de acesso; <br>4.	Clicar em 'Entrar';|
|Critérios de Êxito | •	A pessoa conseguiu realizar o login sem ajuda|


| **Caso de Teste** | **CX-03: Cadastro de usuário (Doador)**|
|---|---|
| Objetivo do Teste | Verificar se as CTA (_call to action_) e fluxo de inserção de dados no sistema são claros para o usuário |
| Passos | 1.	Acessar o app <br>2.	Clicar no botão 'Quero me cadastrar';<br>3.	Inserir as informações cadastrais solicitadas; <br>4.	Clicar em 'Cadastrar' |
| Critérios de Êxito | •	A pessoa conseguiu executar a tarefa sem ajuda <br> • É claro para o usuário qual o perfil de pessoa (Funcionário da ONG /Doador) está sendo cadastrado  <br> •	Fica claro para o usuário que a inclusão foi realizada com sucesso |

| **Caso de Teste** | **CX-04: Login de usuário (Doador)**|
|---|---|
|Objetivo do Teste | Verificar se as CTA (_call to action_) e fluxo de acesso ao sistema são claros para o usuário|
|Passos | 1.	Acessar o app; <br>2.	Clicar no botão 'Quero entrar'; <br>3.	Preencher os dados de acesso; <br>4.	Clicar em 'Entrar';|
|Critérios de Êxito | •	A pessoa conseguiu realizar o login sem ajuda|

| **Caso de Teste** | **CX-05: Cadastro de ONG**|
|---|---|
| Objetivo do Teste | Verificar se as CTA (_call to action_) e fluxo de inserção de dados no sistema são claros para o usuário |
| Passos | 1.	Acessar o app <br>2.	Clicar no botão 'Quero cadastrar a minha ONG';<br>3.	Inserir as informações cadastrais solicitadas; <br>4.	Clicar em 'Cadastrar' |
| Critérios de Êxito | •	A pessoa conseguiu executar a tarefa sem ajuda <br> •	Fica claro para o usuário que a inclusão foi realizada com sucesso |

| **Caso de Teste** | **CX-06: Atualização de dados cadastrais (ONG)**|
|---|---|
|Objetivo do Teste | Verificar se as CTA (_call to action_) e fluxo de manutenção dos dados cadastrais são claros para o usuário |
|Passos | 1.	Fazer login app; <br>	2.	Selecionar a opção 'Alteraçaõ de dados cadastrais'; <br>3.	Inserir as novas informações a serem alteradas; <br> 4.	Clicar em 'Confirmar'|
|Critérios de Êxito | • A pessoa conseguiu executar a tareda sem ajuda  <br> • Fica claro para o usuário que a alteração foi realizada com sucesso|

As referências abaixo irão auxiliá-lo na geração do artefato "Plano de Testes de Usabilidade".

> **Links Úteis**:
> - [Teste De Usabilidade: O Que É e Como Fazer Passo a Passo (neilpatel.com)](https://neilpatel.com/br/blog/teste-de-usabilidade/)
> - [Teste de usabilidade: tudo o que você precisa saber! | by Jon Vieira | Aela.io | Medium](https://medium.com/aela/teste-de-usabilidade-o-que-voc%C3%AA-precisa-saber-39a36343d9a6/)
> - [Planejando testes de usabilidade: o que (e o que não) fazer | iMasters](https://imasters.com.br/design-ux/planejando-testes-de-usabilidade-o-que-e-o-que-nao-fazer/)
> - [Ferramentas de Testes de Usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)
