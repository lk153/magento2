# KAFKA GUIDE

## Zookeeper

    nohup bin/zookeeper-server-start.sh config/zookeeper.properties &

## Kafka

    nohup bin/kafka-server-start.sh config/server.properties &

## Create topic

    bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test

--replication-factor 3 : Configure number of replication
--partitions 1 : Configure number of partitions

## Show list of topics

    bin/kafka-topics.sh --list --bootstrap-server localhost:9092

## Send message to topic

    bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test

## Start consumer

    bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning

## Setting up a multi-broker cluster

    config/server.properties:
        broker.id=0
        listeners=PLAINTEXT://:9092
        advertised.listeners=PLAINTEXT://34.70.106.174:9092
        log.dirs=/tmp/kafka-logs

    config/server-1.properties:
        broker.id=1
        listeners=PLAINTEXT://:9093
        advertised.listeners=PLAINTEXT://34.70.106.174:9093
        log.dirs=/tmp/kafka-logs-1
 
    config/server-2.properties:
        broker.id=2
        listeners=PLAINTEXT://:9094
        advertised.listeners=PLAINTEXT://34.70.106.174:9094
        log.dirs=/tmp/kafka-logs-2

## Describe topic

    bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic my-replicated-topic