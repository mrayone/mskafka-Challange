dev/api:
		yarn --cwd ./api dev:server

dev/consumer: 
		yarn --cwd ./tracker dev:start

dependencies/up:
		docker compose up -d
		docker exec broker cub kafka-ready --zookeeper zookeeper:2181 1 60
		docker exec broker kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 1 --replication-factor 1 --topic 

dependencies/down:
		docker compose down