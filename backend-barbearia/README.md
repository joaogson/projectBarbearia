# Backend - Projeto Barbearia

Este é o backend para o sistema de agendamento da barbearia, desenvolvido com NestJS e Prisma.

## Requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [NPM](https://www.npmjs.com/)

## ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento.

### 1. Clone o Repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd backend-barbearia
```

### 2. Instale as Dependências

O diretório `node_modules`, que contém todos os pacotes necessários, está listado no `.gitignore`. Para instalá-los, execute o seguinte comando na raiz do projeto:

```bash
npm install
```

### 3. Configure o Ambiente

O arquivo `.env` guarda as variáveis de ambiente e também está no `.gitignore`. Ele é essencial para a conexão com o banco de dados.

- Crie um arquivo chamado `.env` na raiz do projeto.
- Adicione a seguinte linha a ele para configurar o banco de dados SQLite:

```env
# filepath: ./.env
DATABASE_URL="file:./dev.db"
```

### 4. Configure o Banco de Dados

Com o ambiente configurado, o Prisma precisa criar o arquivo do banco de dados (`.sqlite`) e aplicar a estrutura das tabelas. Execute o comando:

```bash
npx prisma migrate dev
```

Este comando irá ler seu `schema.prisma`, criar o banco de dados e as tabelas necessárias.

## ▶️ Executando a Aplicação

Após a instalação, você pode iniciar o servidor em modo de desenvolvimento com o seguinte comando:

```bash
npm run start:dev
```

O servidor estará rodando em `http://localhost:3000` (ou na porta que estiver configurada no seu `main.ts`).
