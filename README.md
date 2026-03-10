<p align="center">
  <h1 align="center">Blog Pessoal - API REST com NestJS</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
  <img src="https://img.shields.io/github/license/rafaelq80/blogpessoal_nest_tjs13?style=for-the-badge" alt="Licença">
</p>

## 📝 Descrição

O **Blog Pessoal** é uma API backend que permite a usuários publicarem, editarem e visualizarem postagens relacionadas a diferentes temas de forma organizada e segura.

O projeto foi desenvolvido com fins educacionais, simulando uma aplicação real utilizada em ambientes profissionais, com foco na construção de APIs REST escaláveis utilizando NestJS e TypeScript.

## ✨ Sobre esta API

A API foi desenvolvida com **Node.js**, **NestJS** e **TypeScript**, seguindo princípios de:
- Arquitetura modular
- Separação de responsabilidades
- Padrão REST
- Boas práticas de organização de código backend

A aplicação disponibiliza endpoints para gerenciamento dos recursos **Usuário**, **Postagem** e **Tema**, permitindo a interação entre usuários e os conteúdos publicados.

---

## 🚀 Principais Funcionalidades

-   **Autenticação e Autorização:** Cadastro, autenticação e atualização de usuários com proteção de rotas baseada em JWT.
-   **Gerenciamento de Postagens:** Criação, edição, listagem e exclusão de postagens.
-   **Organização por Temas:** Gerenciamento de temas para classificação das postagens.
-   **Relacionamentos:** Associação entre postagens, seus autores e temas.
-   **Controle de Acesso:** Operações críticas são protegidas e restritas a usuários autorizados.

---

## 🛠️ Tecnologias Utilizadas

| Item | Descrição |
| --- | --- |
| **Runtime** | Node.js |
| **Linguagem** | TypeScript |
| **Framework** | NestJS |
| **Arquitetura** | Modular + REST |
| **ORM** | TypeORM |
| **Banco de Dados** | MySQL |
| **Autenticação** | Passport (JWT) |
| **Validação** | `class-validator` + `class-transformer` |
| **Documentação** | Swagger (OpenAPI) |
| **Testes** | Jest + Super Test |

---

## 🏛️ Arquitetura do Projeto

O projeto utiliza a arquitetura modular proposta pelo NestJS, promovendo organização, escalabilidade e facilidade de manutenção. Cada domínio da aplicação é isolado em um módulo próprio com responsabilidades bem definidas:

-   `Controller` → Recebe e trata requisições HTTP.
-   `Service` → Contém as regras de negócio.
-   `Entity` → Representa as tabelas do banco de dados.
-   `Repository/ORM` → Realiza a comunicação com o banco de dados (via TypeORM).

Essa separação facilita testes, a evolução do sistema e a reutilização de código.

### 📁 Estrutura de Pastas

A organização segue o padrão recomendado pelo NestJS:
```
📦src
┣ 📂auth
┣ 📂postagem
┣ 📂tema
┣ 📂usuario
┣ 📜app.controller.ts
┣ 📜app.module.ts
┣ 📜app.service.ts
┗ 📜main.ts
```
**Exemplo de Módulo (`usuario`):**
```
📦usuario
┣ 📂controllers
┃ ┗ 📜usuario.controller.ts
┣ 📂entities
┃ ┗ 📜usuario.entity.ts
┣ 📂services
┃ ┗ 📜usuario.service.ts
┗ 📜usuario.module.ts
```
---

## 🔐 Fluxo de Autenticação (JWT)

A autenticação da API utiliza **JSON Web Token (JWT)** para proteger rotas sensíveis, seguindo um fluxo stateless e escalável:
1.  O usuário realiza login com suas credenciais.
2.  A API valida os dados e, se corretos, gera um token JWT.
3.  O cliente armazena o token e o envia no header `Authorization: Bearer <TOKEN>` nas requisições subsequentes.
4.  Os *Guards* do NestJS interceptam e validam o token antes de permitir o acesso a rotas protegidas.

---

## ✅ Diferenciais Técnicos

Este projeto demonstra competências importantes para o desenvolvimento backend moderno:

-   Construção de API REST com NestJS.
-   Arquitetura modular e escalável.
-   Autenticação JWT e proteção de rotas.
-   Modelagem de dados relacional (Usuário → Postagem → Tema).
-   Integração com banco de dados (MySQL) via ORM.
-   Validação automática de dados de entrada.
-   Documentação interativa com Swagger.
-   Uso profissional de TypeScript no backend.

---

## ⚙️ Como Executar o Projeto

### Requisitos
- Node.js 18+
- npm
- MySQL
- Insomnia (ou similar)

### 1. Clonando o Repositório
```bash
git clone https://github.com/rafaelq80/blogpessoal_nest_tjs13.git
cd blogpessoal_nest_tjs13
```

### 2. Instalando as Dependências
```bash
npm install
```

### 3. Configurando Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=db_blogpessoal

JWT_SECRET=secret
```

### 4. Executando a Aplicação
```bash
npm run start:dev
```
A API será iniciada em **http://localhost:4000**.

---

## 📖 Documentação e Testes

### Documentação da API (Swagger)
Após iniciar o projeto, a documentação interativa estará disponível em:
**http://localhost:4000**

O Swagger permitirá visualizar endpoints, testar requisições e consultar modelos de dados.

### Executando os Testes
Para rodar os testes automatizados:
```bash
npm run test
```

---

## 🔮 Implementações Futuras

- [ ] Paginação de resultados
- [ ] Upload de imagens para usuários e postagens
- [ ] Sistema de comentários
- [ ] Implementação de Refresh Token

---

## 🤝 Contribuição

Sugestões, melhorias e pull requests são sempre bem-vindos! Você pode contribuir com:
- Melhorias na arquitetura
- Refatorações de código
- Novos testes automatizados
- Aprimoramento da documentação

---

## 👩‍💻 Autora

**Desenvolvido por Bianca Caetano**

- **LinkedIn:** [https://www.linkedin.com/in/bia-caetano](https://www.linkedin.com/in/bia-caetano)
- **GitHub:** [https://github.com/bia024](https://github.com/bia024)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
