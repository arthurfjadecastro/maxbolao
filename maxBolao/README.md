# MAXBOLAO
Seja bem-vindo ao repositório do projeto MAXBOLAO.
Veja instruções de como usar e também acompanhe os processos realizados neste aplicativo desenvolvido com o auxílio de ferramentas e tecnologias como Figma, Vscode, ReactJS, HTML e CSS.


- Protótipo 

![image](https://github.com/arthurfjadecastro/maxbolao/assets/27228969/e5b7e28c-8619-4525-835b-eb4fc5bc0be6)


- App em execução


![](https://media.giphy.com/media/kPuEqXbqAAi6s4OPGU/giphy.gif) 

## Como executar o projeto 
Você só precisa realizar o clone do projeto em sua máquina e depois executar o pod install. O arquivo de configuração Keys foi versionado devido a questões de cunho educacional. 

Vale ressaltar que, não deve-se adicionar chaves secretas no código fonte do projeto ou em repositórios remotos, ou seja, é uma chave individual dos envolvidos no projeto, atendendo requisitos de segurança. 




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




## Experiência com o projeto 

    # Com este projeto aprimorei a qualidade técnica e o conhecimento ao se trabalhar com requisições e boas 
      práticas baseadas em conceitos altamente importantes no desenvolvimento de software.
    
    - Single Responsibility Principle para separar atividades diferentes em diferentes partes do código, para
      que no futuro se houver alterações ou incrementos em lugares específicos, mantenha-se a redução nos
      custos de épicos relacionados a bugs no código.

    - Criação de um 'Fetcher', que é a abstração da requisição e a obtenção dos dados. 

    - Conhecimento adquirido em 'Separation of concern design principles', que parte da organização lógica
      dos arquivos e pastas do projeto.

    - Criação de um Arquivo de constantes com valores parametrizados em prol de realizar 
      alterações propagáveis, aumentando assim a manutenibilidade.

    
  
    
- Neste projeto foi utilizado Coordinator, que permite desacoplar o fluxo lógico do projeto, agregando valor na escalabilidade de novas telas.

- O Factory foi usado com a intenção de desacoplar a instanciação da classe de atualização dos dados de Movies.
	
- Singleton, Delegate entre outros padrões também foram utilizados.







## Futuro

Os planos para este projeto são:

- [ ] Criação de uma Launch Screen customizada
        
      Em prol de aprimorar o conhecimento em customizar animações. 

- [ ] Criação de um UserOnboarding 

      Facilitar a informação para o melhor entendimento e usabilidade do aplicativo.

- [ ] Criação de um Banco de Dados 

      Proposta de aplicação prática em torno do conhecimento adquirido até o momento. 
    
    
    

### Autor

- [Arthur de Castro](https://github.com/arthurfjadecastro)

