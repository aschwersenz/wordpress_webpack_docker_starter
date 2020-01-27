<?php
// Register the styles and scripts for the theme
add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('theme-css', get_template_directory_uri() . '/build/frontend.css');
  wp_enqueue_script('theme-js', get_template_directory_uri() . '/build/frontend.js', ['jquery'], null, true);
}, 100);
