# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

<img src="img/diagrama_classe.png" alt="Diagrama de classe">

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

<img src="img/diagrama-er.png" alt="Diagrama ER">


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
 ![ONG (1)](https://user-images.githubusercontent.com/91227083/194783602-9370e1ff-eecd-4d1f-88ff-9b6a921ad63d.png)

 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Os scripts de criação das tabelas do banco de dados estão disponíveis em:

> - [ScriptBD](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/blob/main/src/ScriptBD.sql)

![bd](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-team-ong/main/docs/img/Estrutura%20BD.png)
<p align="center">Estrutura do banco de dados</p>

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

PROCESSO DE AVALIAÇÃO
--------------------------------------------------
1) Estabelecimento de requisitos de avaliação
<br>
1.1) Propósito da Avaliação: alcançar uma qualidade de produção boa ao final do projeto.<br>
1.2) Tipo de Produto: App mobile de doações para ONGs.<br>
1.3) Modelo de Qualidade: ISO 25010.<br>
--------------------------------------------------<br>
2) Especificação da avaliação
<br>
2.1) Seleção de métricas: Todas as caracteristicas da Iso 25010 serão mensuradas.<br>
2.2) Estabelecimento da pontuação:<br>
- Nao atende (0 pts)<br>
- Atende parcialmente (5 pts)<br>
- Atende conforme o esperado (10 pts)<br>
- Atende mais que o esperado (15 pts)<br>
2.3) Estabelecimento dos critérios de julgamento: Caracteristicas que receberem média de pelo menos 10 pontos serão consideradas validadas. Caracteristicas que não atingirem a média de 10 pontos retornarão para revisão.<br>
--------------------------------------------------<br>
3) Projeto e execução da avaliação: Os avaliadores irão entregar as avaliações que serão tratadas posteriormente.

<br>
<br>

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
