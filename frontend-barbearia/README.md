Clone o repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd frontend-barbearia
```

Instale as dependências

O diretório node_modules não é versionado (conforme o .gitignore), pois contém todas as bibliotecas que o projeto utiliza. Para instalá-las, execute o seguinte comando na raiz do projeto:

```bash
npm install
```

Configure as Variáveis de Ambiente

```bash
npm run dev
```

O arquivo .env (e suas variações como .env.local) é ignorado pelo Git por segurança. Crie um arquivo chamado .env.local na raiz do projeto. Este arquivo deve conter as variáveis de ambiente necessárias, como a URL da sua API backend.

Exemplo de conteúdo para o arquivo .env.local:

Substitua http://localhost:3000 pela URL correta do seu servidor backend.

Rodando o Servidor de Desenvolvimento

Após a instalação e configuração, inicie o servidor de desenvolvimento com:

ou

Acesse a Aplicação

Abra seu navegador e acesse http://localhost:3000 para ver o projeto em execução. A página será atualizada automaticamente sempre que você fizer alterações nos arquivos.

Scripts Disponíveis
No package.json, você encontrará os seguintes scripts:

```bash
npm run dev: Inicia o servidor em modo de desenvolvimento com Fast Refresh.
npm run build: Gera a build otimizada para produção.
npm run start: Inicia o servidor em modo de produção (requer uma build prévia com npm run build).
npm run lint: Executa o linter (ESLint) para analisar o código e encontrar problemas.
```
