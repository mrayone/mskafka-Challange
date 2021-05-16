# Microsserviço com Kafka

### Divisão de preocupações (11:34)

- Criação da api com Express e endpoints.
- Criar arquivo nodemon.json e realizar o execMap para o surcrase.
- _Sucrase_ é um módulo criado para conversão de typescript para js em tempo de execução.

### Utilidades do kafka (18:22)

- O kafka é todo event-driver, ele fica continuamente escutando os tópicos e distribuindo os dados para os consumers.

## Docker-compose (35:30)

- Configurar kafka no docker-compose.
- Incluir imagem do wurstmeister.
- Apontar para a porta 9092.
- buscar docker-compose do kafka.
- O kafka funciona como cluster, ele possui um controller de alto nivel que seria o zookeeper que irá gerenciar a estância do kafka, e a imagem do kafka é a estância do message broker.
- Atenção, inicializar o kafka com depends_on para vincular os ids.

## Criar servidordo kafka com docker (26:30)

- Instalar kafka js no microsserviço e no api.
- Incluir importe do kafka na aplicação.
- Incluir o clientId do consumer.

      const kafka = new Kafka({
          clientId: 'api',
          brokers: ['localhost:9092']
      })

## Criando producers (38:45).

- Criar uma estrutura de wrapper para inializar o app, chamado pelo o seguinte código run().catch(console.logerror).
- Cadastrar rotas da aplicação

## retry mechanism(01:00:00)

- É feito de forma exponencial para cada retentativa e não iria cair a fila.
- Deixando bem resiliente.

## Estudar

- _expectedResponse_ kafka.
