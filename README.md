# vibe
Teste para Vibe saúde

## Paciente

### Backend

- [x] Listar médicos
- [x] Teste de integração de listar médicos
- [x] Agendar consulta
- [x] Teste de integração de agendar consulta
- [x] Listar agendamentos
- [x] Teste de listar agendamentos
- [x] Cancelar agendamento com 24h de antecedência
- [x] Teste de integração de cancelar agendamento

### Frontend

- [x] Consulta de médico por preferência/especialidade
  - [x] Seleção de data e hoário de agendamento
  - [ ] Teste e2e seleção de data e horário
- [ ] Teste e2e de constultar médico
- [x] Listar agendamentos
  - [x] Cancelar agendamento com 24h de antecedência
  - [ ] Teste e2e de cancelar agendamento
- [] Teste e2e de listar agendamentos

## Médico

### Backend

- [x] Listar agendamentos
  - [x] Filtar por período
  - [x] Filtar por status
  - [ ] Filtar por nome do paciente (⚠️ incompleto)
- [x] Teste de integração de listar agendamentos
- [x] Criar da consulta
- [x] Teste de integração de criar consulta
- [x] Finalizar agendamento por falta
- [ ] Teste de integração de finalizar agendamento por falta
      Frontend

- [x] Listar agendamentos
  - [x] Filtar por período
  - [x] Filtar por status
  - [x] Filtar por nome do paciente
- [x] Criar da consulta
- [ ] Teste e2e de criar consulta
- [x] Finalizar consulta com CID e descrição
- [ ] Teste e2e de finalizar consulta
- [x] Finalizar agendamento por falta
- [ ] Teste e2e de finalizar agendamento por falta
- [ ] Teste e2e de listar agendamentos

### Requisitos

🐳 Docker
MongoDb

### Como instalar o MongoDb

[Instalar MongoDb](https://docs.mongodb.com/manual/administration/install-community/)

⚠️ Você não precisa levantar o serviço do mongodb na sua máquina (o docker cuida disso internamente), apenas instalar para termos acesso ao
mongoimport que é resposável por popular o seed (case esteja rodando na sua máquina, derrube o serviço para não haver conflito com a instância do mongo no docker)

### Como rodar

`docker-compose up`

O web app está no localhost:3000

E o banckend graphql no localhost:4000/graphql

### Rodar o seed

`cd api && yarn mongo:seed`

### Resetar db

`cd api && yarn mongo:reset`

### Rodar testes

Parar o container vibe_api usando o comando

`docker stop vibe_api`

Executar o comando

`cd api && yarn test`
