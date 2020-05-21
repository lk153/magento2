# INSTALL ENVIRONMENT

## GIT

    sudo apt-get update
    sudo apt-get install git unzip

## DOCKER

    sudo apt-get remove docker docker-engine docker.io containerd runc
    sudo apt-get update
    sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg-agent \
        software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt-key fingerprint 0EBFCD88
    sudo add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) \
        stable"
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io

## DOCKER COMPOSE

    sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

## JAVA

1) Go to <https://www.oracle.com/java/technologies/javase-jdk14-downloads.html>

    curl -o jdk-14.0.1_linux-x64_bin.tar.gz <https://download.oracle.com/otn-pub/java/jdk/14.0.1+7/664493ef4a6946b186ff29eb326336a2/jdk-14.0.1_linux-x64_bin.tar.gz>

    export JAVA_HOME=jdk-install-dir
    export PATH=$JAVA_HOME/bin:$PATH

2) Include in ~/.profile

    export JAVA_HOME=jdk-install-dir
    export PATH=$JAVA_HOME/bin:$PATH

## KAFKA

    curl -o kafka_2.12-2.5.0.tgz https://mirror.downloadvn.com/apache/kafka/2.5.0/kafka_2.12-2.5.0.tgz
    tar -xzf kafka_2.12-2.5.0.tgz
