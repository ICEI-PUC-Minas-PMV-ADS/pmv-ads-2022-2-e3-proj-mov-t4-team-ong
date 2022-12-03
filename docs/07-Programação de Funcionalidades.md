# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

### Homepage

- Apresentação dos elementos que compõem a identidade visual do projeto: nome, slogan e logomarca
- Exibição das opções de login e cadastro de um novo usuário

### Cadastro de usuário

`Requisito` **RF-01 O aplicativo deve permitir o cadastro de usuários doadores**

- Validação do preenchimento de campos obrigatórios
- Registro do usuário no banco de dados

### Login de usuário

`Requisito` **RF-03 O usuário deve conseguir realizar o login no aplicativo utilizando as informações de usuário e senha previamente cadastrados**

- Validação do preenchimento de campos obrigatórios
- Registro do usuário no banco de dados

### Menu

- Apresentação das funcionalidades disponíveis no aplicativo

### Agenda

`Requisito` **RF-10 O usuário deve conseguir incluir, visualizar e concluir tarefas no aplicativo**

- Apresentação das tarefas cadastradas pelo usuário
- É possível adicionar novas tarefas e concluir uma tarefa cadastrada

### Perfil

`Requisito` **RF-02 O aplicativo deve permitir a atualização do cadastro de usuários doadores**
`Requisito` **RF-04 O usuário deve conseguir alterar a senha de acesso**

- Usuário pode editar as informações da conta, como o nome e a senha
- Também é possível escolher uma foto a partir da galeria do dispositivo ou tirar uma foto utilizando a câmera

### Apresentação das ONGs

`Requisito` **RF-06 O aplicativo deve permitir a busca de ONG's e projetos por filtros (categoria, palavras-chave etc.)**

- Apresentação dinâmica da lista de ONGs inseridas no banco de dados
- Filtro das ONGs de acordo com o termo inserido pelo usuário no input de pesquisa

### Projetos vinculados à ONG

`Requisito` **RF-05 Os usuários do aplicativo devem conseguir visualizar as histórias/projetos vinculados à cada ONG**
`Requisito` **RF-07 Os usuários devem conseguir visualizar a meta de arrecadação para cada história/projeto**

- Apresentação dinâmica da lista de projetos vinculados a cada ONG apresentada na tela anterior
- O usuário tem as opções de visualizar as fotos disponíveis para o projeto e realizar a doação

### Detalhes do projeto

`Requisito` **RF-08 Ao selecionar uma determinada história/projeto, o usuário deve conseguir visualizar os detalhes do projeto: descrição, fotos etc.**

- 

### Pagamento da doação

`Requisito` **RF-09 O aplicativo deve permitir que os usuários façam doações por meio de transferência bancária (PIX) ou Boleto**

- Validação do preenchimento de campos obrigatórios
- Registro da doação no banco de dados

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
