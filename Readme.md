# Prova técnica da BHUT

Este projeto é um teste prático para a candidatura na vaga de Desenvolvedor Back-End na BHUT. Que visa realizar a listagem completa de carros, adicionar novos carros utilizando uma api externa, e adicionar e listar os logs do sistema salvos no MongoDB.

<p align="center">
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#Funcionalidades">Funcionalidades</a> •
 <a href="#Desenvolvimento">Desenvolvimento</a>
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[Node.JS](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Axios](https://axios-http.com/)**
- **[DotEnv](https://github.com/motdotla/dotenv)**
- **[MongoDB](https://www.mongodb.com/pt-br)**
- **[Prettier](https://prettier.io/)**
- **[Eslint](https://eslint.org/)**

## Funcionalidades

- [x] Listar todos carros
- [x] Cadastrar novos carros
- [x] Listar logs do sistema

## Variáveis de ambiente

Para o correto funcionamento do projeto, será preciso adicionar a seguinte variável de ambiente ao arquivo `.env` do projeto.

```.env
BASE_URL=http://api-test.bhut.com.br:3000/api/cars
MONGO_PASSWORD=pE1e7heMS1I3mE7U
```

## Desenvolvimento

```bash
$ cd "diretório de sua preferencia"

# Para fazer o download do projeto rode o comando abaixo
$ git clone https://github.com/AlvarocJesus/Desafio_Tecnico_BHUT.git

# Acesse a pasta do projeto
$ cd Desafio_Tecnico_BHUT

# Para instalar as dependências que serão usadas
$ npm i ou npm install

# Para fazer o projeto funcionar, rode o comando abaixo
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/api>
```
