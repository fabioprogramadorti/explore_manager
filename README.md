
# 🌍 Plataforma de Turismo — Backend (NestJS)

![NestJS](https://img.shields.io/badge/NestJS-202023?style=for-the-badge&logo=nestjs&logoColor=E0234E)
![TypeORM](https://img.shields.io/badge/TypeORM-262B2F?style=for-the-badge&logo=typeorm&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

Backend da aplicação de turismo com gerenciamento de destinos, pacotes de viagem e atividades.  
Construído com **NestJS**, **TypeORM** e **PostgreSQL**.

## 📦 Tecnologias

- 🚀 [NestJS](https://nestjs.com/)
- 🛠 [TypeORM](https://typeorm.io/)
- 🗄 [PostgreSQL](https://www.postgresql.org/)
- ✅ Autenticação (JWT) — **já implementada**
- 🧑‍💻 [Class Validator](https://github.com/typestack/class-validator)

---

## 🚀 Como rodar o projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/fabioprogramadorti/turismo-backend.git
cd turismo-backend
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure o banco de dados

Crie um arquivo **`.env`** e adicione:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=senha
DB_DATABASE=turismo
JWT_SECRET=sua_chave_secreta
```

### 4️⃣ Rode as migrações (opcional)

```bash
npm run typeorm migration:run
```

### 5️⃣ Inicie o servidor

```bash
npm run start:dev
```

---

## 🗂️ Estrutura atual

```
src/
├── auth/               # Autenticação (já implementada)
├── users/              # Usuários (já implementado)
├── destinations/       # Destinos turísticos
├── packages/           # Pacotes de viagem
├── activities/         # Atividades / passeios
```

---

## 🛠️ Funcionalidades

- [x] Autenticação (JWT)
- [x] Cadastro e gerenciamento de usuários
- [x] CRUD de destinos turísticos
- [x] CRUD de pacotes de viagem
- [x] CRUD de atividades

---

## 📝 Modelos de dados

### Destinations

| Campo       | Tipo    |
|-------------|---------|
| id          | integer |
| name        | string  |
| country     | string  |
| description | text    |
| image_url   | string  |

### Packages

| Campo        | Tipo    |
|--------------|---------|
| id           | integer |
| destinationId | integer (FK) |
| title        | string  |
| description  | text    |
| price        | decimal |
| start_date   | date    |
| end_date     | date    |

### Activities

| Campo        | Tipo    |
|--------------|---------|
| id           | integer |
| destinationId | integer (FK) |
| name         | string  |
| description  | text    |
| price        | decimal |
| duration     | string  |

---

## ⚡ Comando rápido para gerar módulos (NestJS CLI)

```bash
nest g module destinations
nest g service destinations
nest g controller destinations
```

---

## 📅 Próximos passos

- [ ] Implementar **Bookings (reservas)**
- [ ] Sistema de **Reviews (avaliações)**
- [ ] Integração com frontend (client)
- [ ] Testes automatizados (unitários e integração)

---

## 👨‍💻 Desenvolvido por

**Fabio M Santos** — *Equipe Ashira Tech* ✈️  
🔗 [github.com/fabioprogramadorti](https://github.com/fabioprogramadorti)


# explore_manager
O ExploreManager é uma plataforma SaaS voltada para empresas de turismo que desejam digitalizar a gestão de seus pacotes, reservas e atendimentos. A solução permite que agências ofereçam experiências turísticas personalizadas, com controle total sobre passeios, clientes, reservas e relatórios.

