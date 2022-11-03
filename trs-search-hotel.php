<?php
/*
Plugin Name: Thai Room Spa Search hotel
Plugin URI:
Description: Buscador de hoteles para reservar
Version:     1.0
Author:      Lacabrera.eco
Author URI:  https://lacabrera.eco
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

if ( ! defined( 'ABSPATH' ) ) exit;
require_once plugin_dir_path(__FILE__) . 'includes/trs-class.php';

add_action( 'wp_head', 'trsSearchInit' );
function trsSearchInit() {
  $loadSearch = new TRS_SEARCH_HOTEL();
  if(!$_GET["et_fb"]){
    $loadSearch->displaySearchHotelBar();
  }
}

register_activation_hook(__FILE__, 'rewrite_flush');