
### Link do deploy
https://trilhabackendjr-jun15-9cay.onrender.com/
# Task Manager API

## Descrição

API RESTful para gerenciamento de tarefas com funcionalidades de CRUD, autenticação de usuários e armazenamento de dados em SQLite.

## Endpoints

### Usuários

- **POST /api/users/register**
  - Registra um novo usuário.
  - Body: { "username": "string", "password": "string" }
  - Validações:
    - `username` é obrigatório.
    - `password` deve ter no mínimo 6 caracteres.

- **POST /api/users/login**
  - Autentica um usuário e gera um token JWT.
  - Body: { "username": "string", "password": "string" }
  - Validações:
    - `username` é obrigatório.
    - `password` é obrigatório.

### Tarefas

- **POST /api/tasks**
  - Cria uma nova tarefa.
  - Body: { "title": "string", "description": "string" }
  - Validações:
    - `title` é obrigatório.
  - Requer autenticação.

- **GET /api/tasks**
  - Lista todas as tarefas.
  - Requer autenticação.

- **PUT /api/tasks/:id**
  - Atualiza uma tarefa existente.
  - Body: { "title": "string", "description": "string", "completed": "boolean" }
  - Validações:
    - `title` é obrigatório.
  - Requer autenticação.

- **DELETE /api/tasks/:id**
  - Deleta uma tarefa existente.
  - Requer autenticação.

- **POST /api/tasks/send-email**
  - Envia os detalhes de uma tarefa por email.
  - Body: { "email": "string", "taskId": "number" }
  - Validações:
    - `email` deve ser válido.
    - `taskId` deve ser um número válido.
  - Requer autenticação.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone git@github.com:Guuzih/TrilhaBackEndJR-JUN15.git
   npm install

-----------------

# 📚 Trilha Inicial BackEnd Jr
Este projeto tem como objetivo desenvolver uma API RESTful para gerenciamento de tarefas, proporcionando funcionalidades de CRUD (Create, Read, Update, Delete) de tarefas, autenticação de usuários e armazenamento dos dados em um banco de dados.

## Objetivos:
- Criar uma API que permita CRUD (Create, Read, Update, Delete) de tarefas.
- Implementar autenticação de usuários.
- Utilizar um banco de dados SQLite para armazenar as tarefas.
- Documentar todo o processo e apresentar as conclusões.

## Requisitos Funcionais:
- Criar Tarefa: Endpoint para criar uma nova tarefa.
- Listar Tarefas: Endpoint para listar todas as tarefas.
- Atualizar Tarefa: Endpoint para atualizar uma tarefa existente.
- Deletar Tarefa: Endpoint para deletar uma tarefa existente.

## Autenticação de Usuários:
- Registro de Usuário: Endpoint para registrar um novo usuário.
- Login de Usuário: Endpoint para autenticar um usuário e gerar um token JWT.
- Proteção de Rotas: Garantir que apenas usuários autenticados possam acessar os endpoints de tarefas.

## Banco de Dados:
- Utilizar SQLite como banco de dados para armazenar informações de usuários e tarefas.

   #### Estrutura do Projeto:
   ```plaintext
   project-root/
   │
   ├── src/
   │   ├── controllers/
   │   ├── models/
   │   ├── routes/
   │   ├── middlewares/
   │   ├── database/
   │   └── app.js
   │
   ├── .env
   ├── .gitignore
   ├── README.md
   └── package.json
   ```
## Entregáveis:
   1. **Código Fonte:**
      - Código fonte do projeto, organizado conforme a estrutura acima.
   2. **Repositório GitHub:**
      - Repositório público contendo o código fonte e documentação.
   3. **Documentação:**
      - README.md com instruções sobre como configurar e executar o projeto, além de detalhes dos endpoints da API.

### Detalhes Técnicos: 🔧
- **Boas Práticas:** Utilizar boas práticas de código limpo, legível e bem documentado.
- **Git:** Utilizar Git para controle de versão e submeter o projeto através de um repositório público no GitHub.

### Dicas para Abordar o Projeto 🌟
- **Crie um Fork desse Repositório.**
- **Criar do Zero:** É fundamental que o projeto seja desenvolvido completamente do zero, demonstrando suas habilidades e criatividade desde o início.
- **Utilize bibliotecas** como Express para criação da API e jsonwebtoken para autenticação.
- **Documente cada etapa do processo para facilitar a compreensão.**

### Critérios de Avaliação: 📝
- **Funcionalidade:** A aplicação atende aos requisitos funcionais e funciona corretamente?
- **Qualidade do Código:** O código é limpo, bem estruturado e adequadamente documentado?
- **Segurança:** A autenticação foi implementada corretamente e as rotas estão protegidas?
- **Uso do Git:** O controle de versão é usado de forma eficaz com mensagens de commit significativas?
- **Documentação:** A documentação é clara e detalha o processo de desenvolvimento e uso da API?

### Não Queremos 🚫
- Descobrir que o candidato não foi quem realizou o teste.
- Ver commits grandes sem muita explicação nas mensagens no repositório.
- Entregas padrão ou cópias de outros projetos. Buscamos originalidade e autenticidade em cada contribuição.

### Prazo ⏳
A data máxima para entrega das trilhas foi removida, permitindo que as pessoas entreguem conforme sua disponibilidade. No entanto, ainda é necessário concluir a trilha com sucesso para ser inserido em uma equipe.

### Instruções de Entrega: 📬
Após finalizar o projeto, publique-o em uma URL pública (por exemplo, Vercel, Netlify, GitHub Pages, etc.) e hospede o seu servidor na nuvem. Use serviços que ofereçam uso gratiuto por um período, como a AWS e preencha o [Formulário](https://forms.gle/gZViPMTSDV5nidSu6):  

---

### Desafio da Inovação 🚀
Achou esse projeto inicial simples? Eleve ainda mais! Estamos em busca de mentes inovadoras que não apenas criem, mas que também desafiem os padrões. Como você pode transformar essa estrutura inicial em algo verdadeiramente extraordinário? Demonstre o poder da sua criatividade e o impacto das suas ideias inovadoras!

---

🔗 **Mantenha-se Conectado:**
- [Discord](https://discord.gg/wzA9FGZHNv)
- [Website](http://www.codigocertocoders.com.br/)
- [LinkedIn](https://www.linkedin.com/company/codigocerto/)
  
🌐 **Contato:**
- Email: codigocertocoders@gmail.com

---

### Precisa de Ajuda?
Está com alguma dificuldade, encontrou algum problema no desafio ou tem alguma sugestão pra gente? Crie uma issue e descreva o que achar necessário.

**Construindo o amanhã, hoje.**
