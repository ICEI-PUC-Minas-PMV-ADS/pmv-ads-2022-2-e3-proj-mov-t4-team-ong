# Plano de Testes de Software

Caso de Teste | CT-01: Cadastro de usuário - Doador
---|---
Requisitos Associados | RF-01: O aplicativo deve permitir o cadastro de usuários doadores
Objetivo do Teste | Verificar se a função de cadastro de usuário está funcionando adequadamente
Passos | 1.	Executar o aplicativo; <br>2.	Clicar no botão 'Quero me cadastrar'; <br>3.	Preencher o formulário com as informações de cadastro; <br>4. Clicar em 'Cadastrar'.
Critérios de Êxito | •	As informações cadastradas devem ser inseridas no banco de dados <br> •	Uma mensagem de sucesso deve ser exibida ao usuário

Caso de Teste | CT-02: Login usuário - Doador
---|---
Requisitos Associados | RF-03: O usuário deve conseguir realizar o login no aplicativo utilizando as informações de usuário e senha previamente cadastrados
Objetivo do Teste | Verificar se a função de login está funcionando adequadamente
Passos | 1.	Executar o aplicativo; <br>2.	Clicar no botão 'Já sou cadastrado'; <br>3.	Preencher o formulário com as informações de usuário e senha; <br>4. Clicar em 'Entrar'.
Critérios de Êxito | •	As informações cadastradas devem ser resgatadas no banco de dados <br> •	Se as informações estiverem corretas, o usuário deve ser direcionado à página inicial do aplicativo <br> • Se as informações estiverem incorretas, uma mensagem de erro deverá ser exibida.


Caso de Teste | CT-03: Atualização de dados cadastrais - Doador
---|---
Requisitos Associados | RF-02: O aplicativo deve permitir a atualização do cadastro de usuários doadores
Objetivo do Teste | Verificar se o usuário é capaz de alterar seus dados de cadastro
Passos | 1.	Executar o aplicativo; <br>2.	Clicar no botão 'Já sou cadastrado'; <br>3.	Preencher formulário com as informações de usuário e senha; <br>4. Clicar em 'Entrar'; <br>5. Escolher a opção de 'Alteração de dados cadastrais'; <br>5. Alterar os dados do formulário; <br>6. Clicar em 'ok'
Critérios de Êxito | •	As informações cadastradas devem ser atualizadas no banco de dados

Caso de Teste | CT-04: Realizar o pagamento de uma doação
---|---
Requisitos Associados | RF-09: O aplicativo deve permitir que os usuários façam doações por meio de transferência bancária (PIX) ou Boleto
Objetivo do Teste | Verificar se o usuário é capaz de realizar o pagamento da doação
Passos | 1.	Executar o aplicativo; <br>2.	Clicar no botão 'Já sou cadastrado'; <br>3.	Preencher formulário com as informações de usuário e senha; <br>4. Clicar em 'Entrar'; <br>5. Escolher um projeto para o qual deseja efetuar a doação e clicar em 'Doar'; <br>5. Preecher o valor da doação e o CPF do doador; <br>6. Escolher a forma de pagamento;<br>7. Clicar em 'Finalizar doação'
Critérios de Êxito | •	Uma mensagem de sucesso deve ser apresentada ao usuário
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
