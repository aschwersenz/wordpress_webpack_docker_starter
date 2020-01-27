# Wordpress + Webpack + Docker Starter Kit

## General
This starter kit should allow you to start the development of a custom Wordpress theme fairly quick and easy using Webpack and Docker.

## Requirements
- node / npm - https://nodejs.org/
- docker / docker-compose - https://www.docker.com/

## Setup
1. `npm install`
2. `docker-compose up`
3. `npm run-script build`

## Going live
Just upload the `/theme` folder and potentially also the `/wp-content` folder to upload the plugins.

## Accounts
The Wordpress account is *admin / admin*.

## Folders
- `assets` Contains the SCSS/JS files for development
- `theme` Contains the PHP files for the theme and the compiled CSS/JS assets. Basically this is the theme...
- `wp-content/plugins` The plugin folder of Wordpress, here plugins can also be manually uploaded.
