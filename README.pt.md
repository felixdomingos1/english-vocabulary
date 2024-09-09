# Dicionário de Inglês de Código Aberto

Um dicionário da língua inglesa de código aberto com 176.023 definições.

Este projeto é baseado no Source Forge: [MySQL English Dictionary](https://sourceforge.net/projects/mysqlenglishdictionary/), que, por sua vez, é baseado no [The Online Plain Text English Dictionary (OPTED)](http://www.mso.anu.edu.au/~ralph/OPTED/).

OPTED é uma lista de palavras do inglês em domínio público, baseada na porção de domínio público do "Texto do Projeto Gutenberg do Dicionário Webster Completo". O texto do Webster é baseado na edição de 1913 do "Dicionário Webster Completo" dos EUA. Para mais informações, veja o [Projeto Gutenberg](https://www.gutenberg.org/).

Dado que o dicionário é baseado na edição de 1913, ele não inclui palavras modernas (ainda!). No entanto, em uma versão futura, incluirá o banco de dados da [WordNet](https://wordnet.princeton.edu/download/current-version), da Universidade de Princeton.

## Objetivo do Projeto

Sempre fui fascinado pela literatura inglesa. Um dos meus passatempos preferidos é ouvir audiolivros enquanto trabalho ou dirijo, principalmente os lançados antes dos anos 1990. No entanto, às vezes encontro dificuldades para entender certas palavras ou o contexto geral. Além disso, frequentemente perco trocadilhos, mesmo quando são evidentes na narrativa. Para resolver isso, acredito que expandir meu vocabulário é essencial. Uma abordagem simples seria um sistema com palavras, caixas de seleção e botões de informação. Se eu já conhecer uma palavra, posso seguir adiante. Caso contrário, gostaria de ouvir sua pronúncia e aprender seu significado. Palavras novas seriam marcadas para revisão posterior, reforçando assim minha compreensão.

### IMPORTANTE ⚠️

Este projeto foi projetado especificamente para estudantes avançados de inglês em nível C1+. Ele não tem a intenção de ser um curso completo de idiomas, mas sim uma ferramenta para aprofundar o conhecimento da língua inglesa. Ao focar em vocabulário mais sofisticado, expressões idiomáticas e estruturas gramaticais complexas, este recurso visa desafiar e estimular o crescimento linguístico.

## Estrutura de Dados

O dicionário possui 3 campos:

1. **word (palavra)**: Em minúsculas.
2. **word type (tipo de palavra)**: Abreviações que descrevem o tipo, por exemplo, verbo, substantivo, etc.
3. **definition (definição)**: Definição da palavra, com a primeira letra em maiúscula.

### Esquema do Banco de Dados

A tabela é nomeada "entries" e possui o seguinte esquema:

```sqlite
Coluna       Tipo             Esquema
------       --------------   -------------------------------
word         varchar(25)      "word" varchar(25) NÃO NULO
wordtype     varchar(20)      "wordtype" varchar(20) NÃO NULO
definition   text             "definition" text NÃO NULO
```

## Formato do Dicionário e Estrutura do Repositório

Atualmente, estão disponíveis 3 formatos:

| Formato & Link                                               | Descrição                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [SQLITE3](https://github.com/UberPython/English-Dictionary-Open-Source/tree/main/sqlite3) | Um único arquivo formatado como SQLITE3                      |

## Instruções de Uso

```bash
npm install
node app.js
```

| Linguagem                                                    | Instruções disponíveis para                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

## Créditos

1. **[Projeto Gutenberg](https://www.gutenberg.org/)**: Por fornecer o original [1913 US Webster's Unabridged Dictionary](https://www.gutenberg.org/ebooks/29765). Certifique-se de ler o [README do Projeto Gutenberg](https://www.gutenberg.org/files/29765/29765-ReadMe.txt) para informações de licença e outros detalhes caso deseje utilizar para fins comerciais.
2. **[x16bkkamz6rkb78](https://sourceforge.net/u/x16bkkamz6rkb78/profile/)**: Por compilar o dump MySQL e liberar no [Source Forge](https://sourceforge.net/projects/mysqlenglishdictionary/).
3. **[dumblob](https://github.com/dumblob)**: Por fornecer a ferramenta incrivelmente elegante [mysql2sqlite](https://github.com/dumblob/mysql2sqlite) para converter o dump MySQL em SQLite3.

---
