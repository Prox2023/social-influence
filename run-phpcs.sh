# Run PHPCS on the passed file
phpcs --config-set installed_paths ~/.composer/vendor/wp-coding-standards/wpcs,~/.composer/vendor/phpcompatibility/php-compatibility,~/.composer/vendor/phpcompatibility/phpcompatibility-wp
composer global config bin-dir --absolute
