#### Passo a passo do desenvolvimento do projeto

* Fizemos o back-end com Node.js + Express que fornece uma API REST com os dados de setores, equipamentos e componentes.

* Fizemos o front-end com React que exibe os dados organizados, com uma interface de usuário bonita e fácil de navegar.

* Fizemos alguns ajustes Importantes no Front-end como:
    * Gerenciamento de estado de carregamento e erro que adicionamos dois estados:
        - loading: para exibir uma mensagem enquanto os dados estão sendo carregados.
        - error: para exibir uma mensagem de erro se a requisição falhar.

    * Mensagens de feedback:
        - Agora o aplicativo exibe uma mensagem "Carregando dados..." enquanto espera a resposta da API, e uma mensagem de erro se algo der errado.

    * Melhoria na usabilidade:
        - Com a lógica de exibição de carregamento e erro, a interface do usuário se torna mais robusta, e o usuário não ficará preso em uma tela vazia se algo der errado.

#### Para Testar
* ( Front-end ) :
```
    // No terminal rode
    cd frontend/

    // Depois
    npm start
```

* ( Back-end ) :
```
    // abra um novo terminal na pasta raiz do projeto
    cd backend

    // Rode no terminal
    npm run dev
```

#### Fiz algumas alterações grandes no projeto
* Passei o projeto de javaScript para typescript.

* Ultilizei tecnologias atuais para o projeto rodar melhor como:
    * Fastify substitui o Express:
        - O app.get funciona de maneira semelhante ao Express, mas o Fastify é conhecido por ser mais performático.

    * Cors:
        - O plugin de CORS (@fastify/cors) foi registrado usando o método app.register.

    * Rota:
        - A rota /api/setores foi convertida para retornar os dados de maneira assíncrona com o Fastify.

    * Inicialização do Servidor:
        - O método listen foi ajustado para funcionar com o Fastify e TypeScript, passando a porta e o host.

* Implementei o BiomeJs para fazer a formatação do código.

* Apliquei as config do editor.

* Acrescentei o docker como banco de dados Postgresql.
    - Coloquei um framework Drizzle para manipular os dados do db e fazer as querys.
    - Ultilizo o Zod para fazer verificacão de variável de ambiente

(Gustavo)
* Conexão com postgrees estabelecida buscando os dados de autenticação do arquivo .env

(Front-end)
* Troquei o react apenas para usar o Vite + React
* Coloquei o Tailwindcss para fazer a estilização
* Fiz a configuração do biomeJs

(Front-end)
* Criando padronizações de templates para o App
* Inserido navbar e um menu interativo