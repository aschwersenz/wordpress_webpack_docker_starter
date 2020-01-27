# Wordpress + Webpack + Docker Starter Kit

## General
This starter kit should allow you to start the development of a custom theme for Wordpress 5.x fairly quick and easy using Webpack and Docker. Development is happening with the SCSS/JS files in the `/assets` folder and the PHP files in the `/theme` folder. The compiled SCSS/JS assets are combined with the PHP files in the `/theme` folder which is mounted to the Wordpress Docker container.

## Requirements
- node / npm - https://nodejs.org/
- docker / docker-compose - https://www.docker.com/

## Setup
1. `npm install`
2. `docker-compose up`
3. `npm run-script build`

## Accounts
The Wordpress account is *admin / admin*.

## Folders
- `assets` Contains the SCSS/JS files for development.
- `theme` Contains the PHP files for the theme and the compiled CSS/JS assets. Basically this is the theme...
- `wp-content/plugins` The plugin folder of Wordpress, here plugins can also be manually uploaded.

## Docker volumes
- `/theme` -> `/var/www/html/wp-content/themes/name_me`
- `/wp-content/plugins` -> `/var/www/html/wp-content/plugins`
- `.htaccess` -> `/var/www/html/.htaccess`

## Going live
Just upload the `/theme` folder and potentially also the `/wp-content` folder to upload the plugins.
