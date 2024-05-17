


# Gerenciador de Cadastro de Usuários

Este projeto é uma aplicação frontend criada com React, TypeScript e Material-UI, utilizando Vite como ferramenta de build.

### Funcionalidades

- Cadastro de novos usuários
- Listagem de usuários cadastrados
- Exclusão de usuários existentes

![gismi](https://github.com/Gismii/Bry-test-front/assets/97984496/91149fe3-f059-4a7a-9619-7c48516ada13)

### Pré-requisitos

Para rodar este projeto localmente, certifique-se de ter o Node.js instalado na sua máquina.

### Instalação

1. Clone o repositório:

   ```bash
   git clone <git@github.com:Gismii/Bry-test-front.git>
   cd nomedoapp
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Vite. Abra seu navegador e acesse `http://localhost:3000` para visualizar a aplicação.

### Construindo para Produção

Para gerar uma build otimizada para produção, execute o seguinte comando:

```bash
npm run build
```

Isso criará uma pasta `dist` na raiz do projeto com os arquivos otimizados para produção.

### Outros Comandos

- `npm run serve`: Serve a versão de produção localmente após a construção.
- `npm run lint`: Executa o linter para verificar e corrigir problemas no código TypeScript.

### Estrutura do Projeto

```
src/            # Pasta principal do código-fonte
 |- components/ # Componentes reutilizáveis da aplicação
 |- services/   # Serviços para comunicação com o backend (API)
 |- types/      # Tipos TypeScript utilizados na aplicação
 |- App.tsx     # Componente principal da aplicação
 |- index.tsx   # Arquivo de inicialização do React
public/
 |- index.html  # Arquivo HTML principal
 |- favicon.ico # Ícone da aplicação
```

### Tecnologias Utilizadas

- React (biblioteca JavaScript para construir interfaces de usuário)
- TypeScript (superset JavaScript para tipagem estática)
- Material-UI (biblioteca de componentes React baseados no Material Design)
- Vite (bundler para projetos frontend modernos)


