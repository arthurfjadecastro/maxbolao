# MAXBOLAO
Seja bem-vindo ao repositório do projeto MAXBOLAO.
Veja instruções de como usar e também acompanhe os processos realizados neste aplicativo desenvolvido com o auxílio de ferramentas e tecnologias como Figma, Vscode, ReactJS, HTML e CSS.


- Protótipo 
https://www.figma.com/file/aqaQvVQY3t3oSPSAIWqpkF/Bol%C3%A3o-do-max?type=design&node-id=0%3A1&mode=design&t=3EImfs6w3guAO9rz-1
![image](https://github.com/arthurfjadecastro/maxbolao/assets/27228969/e5b7e28c-8619-4525-835b-eb4fc5bc0be6)






- Rules Scrolling
![rulesgif](https://github.com/arthurfjadecastro/maxbolao/assets/27228969/9612df42-58c7-44c4-a2f9-cc17c9734ed6)

- Simulate Error
![error](https://github.com/arthurfjadecastro/maxbolao/assets/27228969/e802487a-a531-4b08-9dc8-d531ca634a42)

- Loading State and Info Details
![loadingstate-ezgif com-optimize](https://github.com/arthurfjadecastro/maxbolao/assets/27228969/5a60d0d7-ad09-4d8d-9939-97e55a1ce272)


## Como executar o projeto 

Para começar a utilizar o projeto, siga as instruções abaixo:

1. Faça o download e extraia o projeto em seu ambiente de desenvolvimento.

2. Abra o projeto em um editor de texto ou IDE de sua preferência.

3. No terminal, execute o comando `npm install` para instalar os pacotes.

4. `npm start` para rodar o projeto em seu navegador `http://localhost:3000/`, automaticamente.

5. Para executar o projeto nas próximas vezes, basta utilizar `npm start` no terminal.



# Estrutura de Arquivos/
```md
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── logo.svg
│   ├── Fonts/
│   └── Images/
├── src/
│   ├── Components/
│   │   ├── BasicCard/
│   │   │   ├── basicCard.css
│   │   │   ├── BasicCard.jsx
│   │   ├── BasicTable/
│   │   │   ├── BasicTable.jsx
│   │   │   ├── index.js
│   │   │   ├── PlayerDetail.jsx
│   │   │   ├── table.css
│   │   │   ├── TableStyle.js
│   │   ├── Home/
│   │   │   ├── FrontAge/
│   │   │   │   ├── Facade.jsx 
│   │   │   │   └── index.js
│   │   │   ├── HeaderMax/
│   │   │   │   ├── HeaderMax.jsx
│   │   │   │   ├── index.js
│   │   │   │   ├── MaxImage.jsx
│   │   │   ├── Navbar/
│   │   │   │   ├── navbar.jsx
│   │   │   ├── Rules/
│   │   │   │   ├── Rules.jsx
│   │   │   ├── Utils/
│   │   │   │   ├── index.js
│   │   │   │   └── RenderIf.jsx
│   │   │   ├── home.css
│   │   │   ├── Home.jsx
│   │   │   └── index.js
│   ├── Network/
│   │   ├── CustomHooks/
│   │   │   ├── index.js
│   │   │   ├── useRequest.js
│   │   ├── config.json
│   │   ├── httpService.js
│   │   ├── useResultsFootball.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```


## Frameworks aplicadas no projeto

**@emotion/react** - Biblioteca para escrever estilos com JavaScript (Emotion CSS-in-JS). 

**@emotion/styled** - Utilitário de componentes estilizados para @emotion/react. 

**@mui/icons-material** - Biblioteca de ícones do Material-UI.

**@mui/material** - Biblioteca de componentes React do Material-UI.

**@mui/styled-engine-sc** - Motor styled-components para Material-UI.

**date-fns** - Biblioteca moderna de utilitários de data em JavaScript.

**react** - Pacote React para trabalhar com o DOM.

**react-dom** - Biblioteca para criar transições de visualização em iOS. 

**Axios** - Cliente HTTP baseado em promessas para navegador e Node.js.

**react-router-dom** - Roteamento declarativo para aplicações React.

**react-scripts** - Configuração e scripts para Create React App.

**react-toastify** - Biblioteca de notificações para aplicações React.

**styled-components** - Biblioteca de estilização para React e componentes.

**web-vitals** - Biblioteca para medir Web Vitals em aplicações React.



-------------------------------------

## Experiência com o projeto 

### Este projeto renovou nossas experiências no desenvolvimento web, integrando eficientemente o Figma com o uso de plugins e códigos disponíveis, proporcionando um ambiente mais produtivo.

- Ao trabalhar com requisições, destacamos a aplicação do **Single Responsibility Principle**, que orientou a separação de diferentes responsabilidades em partes distintas do código. Essa abordagem não apenas facilita a compreensão do código, mas também contribui para a redução de custos relacionados a bugs, pois modificações e incrementos em áreas específicas tornam-se mais seguros e diretos.

- Adquirimos um entendimento mais profundo dos princípios de design, como o **'Separation of Concerns'**, que se reflete na organização lógica dos arquivos e pastas do projeto.

- Em resumo, este projeto não apenas reavivou nosso conhecimento técnico, mas também me proporcionou a oportunidade de aplicar práticas avançadas e incorporar aprendizados recentes, resultando em uma abordagem mais **robusta e eficiente** no desenvolvimento de software.


## Futuro

Os planos para este projeto são:

- [ ] Realizar a Criação de uma Splash Screen customizada
        
      Em prol de aprimorar o conhecimento, melhorar a experiência do usuário quanto ao loading na tabela e na última atualização.

- [ ] Remover Simulate Error 
        
      Recurso existente apenas para simulação do caso de uso alternativo. Não há necessidade de ir para produção.

- [ ] Validar dicionário de meses
        
      Uma vez que a requisição retorna a data e hora da última atualização, na conversão para demonstração visual do usuário é necessário mapear a abreviação do mês retornado via request. Isto posto, precisamos validar o mapeamento realizado no projeto, uma vez que o retorno pode ser em 'Português' ou 'Inglês'.

      Jan: "Janeiro",
      Feb: "Fevereiro",
      Mar: "Março",
      Apr: "Abril",
      May: "Maio",
      Jun: "Junho",
      Jul: "Julho",
      Aug: "Agosto",
      Sep: "Setembro",
      Oct: "Outubro",
      Nov: "Novembro",
      Dec: "Dezembro",

    
    
### Autores

- [Arthur de Castro](https://github.com/arthurfjadecastro)
- [Francisco L. Figueiredo]()
- [Fernando Lemos](https://github.com/fernandolemos92)

