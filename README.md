## School List - Descomplica Challenge

### Uma simples aplicação para listagem de alunos contendo cpf, nome e sobronome


### Tecnologias Usadas
* React
* NodeJs
* Typescript
* GraphQL
* TypeORM
* PostgresSQL
* Docker

### Pre requisitos

Para rodar a aplicação serão necessarios duas ferramentas: Docker e Docker Compose.

Instruções de como instalar o **Docker** no [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/), [Windows](https://docs.docker.com/docker-for-windows/install/), [Mac](https://docs.docker.com/docker-for-mac/install/).

Docker Compose ja está incluido no pacote de instalação do Windows e do Mac, então apenas os usuarios do Ubuntu precisarão seguir as [seguintes instruções](https://docs.docker.com/compose/install/) para instalar o docker compose.

### Como rodar?

Para rodar a aplicação é necessario apenas executar o seguinte comando: 

```
docker-compose up -d
```

Se você quiser parar a aplicação, use o seguinte comando:

```
docker-compose down
```


### Como usar?

A aplicação de front estará disponivel na url: **http://localhost:4200**

A api graphql estará disponivel na url: **http://localhost:4000**
