# MAGENTO 2

## CHEATSHEET

Reference Nginx configuration: <https://github.com/emizentech/magento2/blob/master/nginx.conf.sample>

Public Key: __6ea21b68b69b400dc5de77cebe8c7baa__

Private Key: __39a473ce454d4ff2a83e36b66e0ad38d__

    php bin/magento setup:install --base-url=http://magentoce.local --db-host=db --db-name=magento --db-user=magento --db-password=magento --admin-firstname=admin --admin-lastname=admin --admin-email=admin@admin.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1

Deploy static content:

    php bin/magento setup:static-content:deploy en_US --area frontend --theme Magento/luma -f

Install sample data:

    php bin/magento sampledata:deploy

__*If you’re installing sample data after installing Magento, you must also run the following command to update the database and schema in the <magento_root> folder:*__

    php bin/magento setup:upgrade

Cache management:

    php bin/magento cache:clean
    php bin/magento cache:flush

Show the current mode:

    php bin/magento deploy:mode:show

Show/Change admin url:

    php bin/magento info:adminuri
    php bin/magento setup:config:set --backend-frontname admin
