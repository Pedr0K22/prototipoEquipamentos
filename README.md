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
'''
    // No terminal rode
    cd frontend/

    // Depois
    npm start
'''

* ( Back-end ) :
'''
    // abra um novo terminal na pasta raiz do projeto
    cd prototipoEquipamento

    // Rode no terminal
    node server.js
'''
