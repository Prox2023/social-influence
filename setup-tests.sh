#!/bin/bash

# define your WordPress plugin name
PLUGIN_SLUG='social-influence'

# Start wp-env container
npx wp-env start

# run composer to install PHPUnit
docker exec -w /var/www/html/wp-content/plugins/$PLUGIN_SLUG $PLUGIN_SLUG_wordpress composer require --dev phpunit/phpunit ^9

# use WP-CLI to scaffold test files
docker exec -w /var/www/html/wp-content/plugins/$PLUGIN_SLUG $PLUGIN_SLUG_wordpress wp scaffold plugin-tests $PLUGIN_SLUG

echo "Done. You can now write tests in the /tests folder."
