# How to Get Started with Development

Follow these instructions to set up your development environment and start developing.

## Setup

1. **Clone the Repository**: Clone the project repository onto your local machine. 

2. **Install Node.js and npm**: Our project utilizes npm to handle dependencies and scripts. Both Node.js and npm need to be installed on your local machine. Node.js can be downloaded from their [official website](https://nodejs.org/en/download/). npm comes packaged with Node.js.

3. **Install Composer**: Composer is a tool for managing PHP dependencies. It is required to install PHP dependencies for this project. If Composer is not already installed on your machine, follow the instructions on their [website](https://getcomposer.org/download/) to install it. 

4. **Install Docker**: We will be using a Docker-based development environment provided by `wp-env`. You should install Docker if you have not already. To do this, follow the guide on the [Docker website](https://docs.docker.com/get-docker/). 

5. **WP-ENV**: The development environment for this project is handled by WP-ENV, a zero config tool from WordPress. It can be installed using npm, which you installed earlier: `npm -g i @wordpress/env`.

6. **Install Dependencies**: From the root of the project, run `composer install` to install the PHP dependencies and `npm install` to install any required npm packages (if any).

## Development Commands

With the development environment set up, you can utilize these commands:

- `npm run pwd`: Prints the working directory inside the `cli` service container. This should be the plugin directory.
- `npm run composer`: Runs composer inside the `cli` service container at the plugin directory. Append composer commands to be run inside the container after a space.
- `npm run start_php`: Starts the development environment and runs composer update inside the container at the plugin directory.
- `npm run test`: Currently it only runs the phpunit tests. **coming soon client tests...**

## Development Environment Details

This project's development environment is managed through `wp-env`, a zero-config development tool provided by WordPress. Within the root directory of the project, the `wp-env.json` file controls WordPress installation and includes:

- `core`: The version of WordPress you want to install.
- `plugins`: The plugins you want automatically installed and activated. "." refers to the current plugin.
- `port`: The port where the WordPress site will run.
- `testsPort`: Run PHPUnit tests on a separate instance (if required).
- `config`: Additional configuration parameters for WordPress installation. For this project, we set `WP_DEBUG` and `SCRIPT_DEBUG` to `true` to facilitate debugging.

You should now be able to kickstart development! Happy coding!
