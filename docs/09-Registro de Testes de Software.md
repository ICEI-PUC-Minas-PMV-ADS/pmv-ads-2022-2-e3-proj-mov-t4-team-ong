# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

### CT-01: Cadastro de usuário - Doador

**Objetivo:** Verificar se a função de cadastro de usuário está funcionando adequadamente

**Passos:** 
1. Executar o aplicativo;
2. Clicar no botão 'Quero me cadastrar';
3. Preencher o formulário com as informações de cadastro;
4. Clicar em 'Cadastrar'.

**Critério de êxito:** <br>
• As informações cadastradas devem ser inseridas no banco de dados
• Uma mensagem de sucesso deve ser exibida ao usuário

**Resultado do teste:** *Passou*

**Evidências:**

------------------------------------------------------------------------------

### CT-02: Login usuário - Doador

**Objetivo:** Verificar se a função de login está funcionando adequadamente

**Passos:** 
1. Executar o aplicativo;
2. Clicar no botão 'Já sou cadastrado';
3. Preencher o formulário com as informações de usuário e senha;
4. Clicar em 'Entrar'.

**Critério de êxito:** <br>
• As informações cadastradas devem ser resgatadas no banco de dados
• Se as informações estiverem corretas, o usuário deve ser direcionado à página inicial do aplicativo
• Se as informações estiverem incorretas, uma mensagem de erro deverá ser exibida.

**Resultado do teste:** *Passou*

**Evidências:**

------------------------------------------------------------------------------

### CT-03: Atualização de dados cadastrais - Doador

**Objetivo:** Verificar se o usuário é capaz de alterar seus dados de cadastro

**Passos:** 
1. Executar o aplicativo;
2. Clicar no botão 'Já sou cadastrado';
3. Preencher formulário com as informações de usuário e senha;
4. Clicar em 'Entrar';
5. Escolher a opção de 'Alteração de dados cadastrais';
5. Alterar os dados do formulário;
6. Clicar em 'ok'

**Critério de êxito:** <br>
• As informações cadastradas devem ser atualizadas no banco de dados

**Resultado do teste:** *Passou*

**Evidências:**

------------------------------------------------------------------------------

### CT-04: Realizar o pagamento de uma doação

**Objetivo:** Verificar se o usuário é capaz de realizar o pagamento da doação

**Passos:** 
1.	Executar o aplicativo
2.	Clicar no botão 'Já sou cadastrado'
3.	Preencher formulário com as informações de usuário e senha
4.	Clicar em 'Entrar'
5.	Escolher um projeto para o qual deseja efetuar a doação e clicar em 'Doar'
6.	Preecher o valor da doação e o CPF do doador
7.	Escolher a forma de pagamento
8.	Clicar em 'Finalizar doação'

**Critério de êxito:** <br>
• Uma mensagem de sucesso deve ser apresentada ao usuário

**Resultado do teste:** *Passou*

**Evidências:**

Após a execução do aplicativo, a homepage é apresentada ao usuário:
</br></br>
<p align="center">
<img src=https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/main/docs/img/HomePage.jpeg width=270 heigth=270>
</p>
<p align="center"> Evidência 1 - Homepage com as opções de cadastro e login </p>
</br>

Após efetuar o login e selecionar um projeto para doação, a tela para realizar o pagamento é apresentada:
</br></br>
<p align="center">
<img src=https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/main/docs/img/Tela%20de%20doacao.jpeg width=270 heigth=270>
</p>
<p align="center"> Evidência 2 - Tela para realizar o pagamento da doação </p>
</br>

Informando o valor da doação, o CPF e a forma de pagamento:
</br></br>
<p align="center">
<img src=https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/main/docs/img/Dados%20da%20doacao.jpeg width=270 heigth=270>
</p>
<p align="center"> Evidência 3 - Preenchimento das informações de pagamento </p>
</br>

Após clicar em 'Finalizar doação', a mensagem de sucesso é apresentada ao usuário:
</br></br>
<p align="center">
<img src=https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/main/docs/img/Doacao%20finalizada.jpeg width=270 heigth=270>
</p>
<p align="center"> Evidência 4 - Mensagem de sucesso apresentada </p>
</br></br>

**Observações:**

Pontos a melhorar

1) Se as informações obrigatórias não forem preenchidas o aplicativo deve fornecer um retorno ao usuário, indicando que é necessário o preenchimento de todas as informações obrgatórias para conclusão da doação.
</br>

------------------------------------------------------------------------------

### CT-05: Listagem de Ongs

**Objetivo:** Verificar se o usuário é capaz de visualizar as Ongs cadastradas e filtra-las

**Passos:** 
1. Executar o aplicativo;
2. Clicar no botão 'Já sou cadastrado';
3. Preencher formulário com as informações de usuário e senha;
4. Clicar em 'Entrar';
5. Visualizar a lista de Ongs em formato de Lista';
6. Digitar palavras ou fragmentos de palavras para filtrar a lista e retornar informações mais relevantes

**Critério de êxito:** <br>
• Sucesso no carregamento e filtro dos dados.

**Resultado do teste:** *Passou*

**Evidências:**

------------------------------------------------------------------------------

### CT-06: Projetos das Ongs

**Objetivo:** Visualizar as histórias e projetos de cada Ong e disponibilizar link para doação

**Passos:** 
1. Executar o aplicativo;
2. Clicar no botão 'Já sou cadastrado';
3. Preencher formulário com as informações de usuário e senha;
4. Clicar em 'Entrar';
5. Visualizar a lista de Ongs em formato de Lista';
6. Selecionar uma Ong;
7. Escolher um projeto para o qual deseja efetuar a doação e clicar em 'Doar'

**Critério de êxito:** <br>
• Sucesso no carregamento dos projetos cadastrados na base de dados e funcionamento adequado do link 'Doar'

**Resultado do teste:** *Passou*

**Evidências:**

------------------------------------------------------------------------------

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
