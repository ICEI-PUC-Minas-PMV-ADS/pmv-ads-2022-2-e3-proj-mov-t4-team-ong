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
• As informações cadastradas devem ser inseridas no banco de dados <br>
• Uma mensagem de sucesso deve ser exibida ao usuário

**Resultado do teste:** *Passou*

**Evidências:**

Aqui é apresentada a tela vazia de cadastro com campos requeridos.
</br></br>
<p align="center">
  
![Login1](https://user-images.githubusercontent.com/91227083/204170863-591d2e1f-8f02-4b23-bee9-e15d33033b60.jpeg)
  
</p>
<p align="center"> Evidência 1 </p>
</br>

Campos preenchidos
</br></br>
<p align="center">
  
![Login2](https://user-images.githubusercontent.com/91227083/204170926-593d7291-40d7-455e-b2f4-3f33cae227d7.jpeg)
  
</p>
<p align="center"> Evidência 2 </p>
</br>

Tela de "Throw" com mensagem de sucesso
</br></br>
<p align="center">
  
![Login3](https://user-images.githubusercontent.com/91227083/204171054-8aeaffaf-d74d-4a03-820a-4aebfaf627c5.jpeg)
  
</p>
<p align="center"> Evidência 3 </p>
</br>

Apresentação dos dados persistidos no Postgres
</br></br>
<p align="center">
  
![Login4](https://user-images.githubusercontent.com/91227083/204171111-4f194489-b63c-4a5e-9e50-be6a7790d367.jpeg)
  
</p>
<p align="center"> Evidência 4 </p>
</br>

------------------------------------------------------------------------------

### CT-02: Login usuário - Doador

**Objetivo:** Verificar se a função de login está funcionando adequadamente

**Passos:** 
1. Executar o aplicativo;
2. Clicar no botão 'Já sou cadastrado';
3. Preencher o formulário com as informações de usuário e senha;
4. Clicar em 'Entrar'.

**Critério de êxito:** <br>
• As informações cadastradas devem ser resgatadas no banco de dados <br>
• Se as informações estiverem corretas, o usuário deve ser direcionado à página inicial do aplicativo <br>
• Se as informações estiverem incorretas, uma mensagem de erro deverá ser exibida.

**Resultado do teste:** *Passou*

**Evidências:**

Aqui é apresentada a tela vazia de login de usuário.
</br></br>
<p align="center">
  
![Login5](https://user-images.githubusercontent.com/91227083/204171322-52bec127-5012-409c-a08a-c8ecc45224fb.jpeg)
  
</p>
<p align="center"> Evidência 1 </p>
</br>

Aqui é apresentada a tela preenchida de login de usuário.
</br></br>
<p align="center">
  
![Login6](https://user-images.githubusercontent.com/91227083/204171381-bc08fcb5-2d0a-4c24-b59a-26e9efa069d4.jpeg)
  
</p>
<p align="center"> Evidência 2 </p>
</br>

Menu Drawer com login autenticado
</br></br>
<p align="center">
  
![Login7](https://user-images.githubusercontent.com/91227083/204171476-c0a2275e-6dfd-4aa5-aeec-412f30b770e1.jpeg)
  
</p>
<p align="center"> Evidência 3 </p>
</br>

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

Menu de atualização de cadastro vazio
</br></br>
<p align="center">
  
![Atualizacao1](https://user-images.githubusercontent.com/91227083/204171661-caebae6e-583d-477c-87d2-01fa2659375c.jpeg)
  
</p>
<p align="center"> Evidência 1 </p>
</br>

Menu de atualização de cadastro preenchido
</br></br>
<p align="center">
  
![Atualizacao2](https://user-images.githubusercontent.com/91227083/204171690-d6746f55-6f01-4752-90d2-ef366bbe70f1.jpeg)
  
</p>
<p align="center"> Evidência 2 </p>
</br>

Tela de "Throw" com mensagem de sucesso
</br></br>
<p align="center">
  
![Atualizacao3](https://user-images.githubusercontent.com/91227083/204171732-ef333c94-128d-4be2-9204-e26879a2719f.jpeg)
  
</p>
<p align="center"> Evidência 3 </p>
</br>

Usuario alterado no menu Drawer
</br></br>
<p align="center">
  
![Atualizacao4](https://user-images.githubusercontent.com/91227083/204171847-4bb42adb-815d-40eb-a4fa-b19fe8d88194.jpeg)
  
</p>
<p align="center"> Evidência 4 </p>
</br>

Dados persistidos no Postgres
</br></br>
<p align="center">
  
![Atualizacao5](https://user-images.githubusercontent.com/91227083/204171863-18f3869b-6d15-49a3-8298-741f7b7437df.jpeg)
  
</p>
<p align="center"> Evidência 5 </p>
</br>

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
<img src=https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/main/docs/img/Tela%20de%20pagamento.jpg width=270 heigth=270>
</p>
<p align="center"> Evidência 2 - Tela para realizar o pagamento da doação </p>
</br>

Informando o valor da doação, o CPF e a forma de pagamento:
</br></br>
<p align="center">
<img src=https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/main/docs/img/Tela%20preenchida.jpg width=270 heigth=270>
</p>
<p align="center"> Evidência 3 - Preenchimento das informações de pagamento </p>
</br>

Após clicar em 'Finalizar doação', a mensagem de sucesso é apresentada ao usuário:
</br></br>
<p align="center">
<img src=https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/main/docs/img/Finaliza%C3%A7%C3%A3o%20doa%C3%A7%C3%A3o.jpg width=270 heigth=270>
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

Lista de Ongs recuperadas da base de dados
</br></br>
<p align="center">
  
![Lista1](https://user-images.githubusercontent.com/91227083/204174268-c8bcde7c-bab3-449f-ba24-1b431bf65223.jpeg)
  
![Lista2](https://user-images.githubusercontent.com/91227083/204174276-227ac1f1-7ddd-4be7-8518-b73fee5118e6.jpeg)
  
</p>
<p align="center"> Evidência </p>
</br>

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

Cards de projetos relacionados à Ong escolhida
</br></br>
<p align="center">
 
![Projeto1](https://user-images.githubusercontent.com/91227083/204174324-f121ef66-341b-4059-aa92-6ab612801ea0.jpeg)
 
</p>
<p align="center"> Evidência </p>
</br>

------------------------------------------------------------------------------

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
