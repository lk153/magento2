FROM php:7.3-fpm
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libcurl4-openssl-dev \
        pkg-config \
        libxml2-dev \
        openssl \
        libzip-dev \
        libmcrypt-dev \
        libonig-dev \
        graphviz \
        libc6 \
        openssl \
        unzip \
        libxslt1-dev \
        libxpm-dev \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/ --with-xpm-dir=/usr/include/ --enable-gd-jis-conv \
    && docker-php-ext-install -j$(nproc) mysqli intl pdo_mysql simplexml soap xsl zip bcmath ctype curl gd hash iconv mbstring
RUN docker-php-ext-enable intl pdo_mysql simplexml soap xsl zip bcmath ctype curl gd hash iconv