<?php
class TRS_SEARCH_HOTEL {
  public function displaySearchHotelBar () {
    function renderDivID() {
      $output = '';
      ob_start();
      ?>
        <div id="root"></div>
      <?
      $output = ob_get_clean();
      wp_register_script('trsSearchHotel', esc_url(plugins_url('/frontend/dist/bundle.js', dirname(__FILE__) )), true);
      // wp_register_script('trsSearchHotel', 'http://localhost:8080/bundle.js', true);
      wp_localize_script('trsSearchHotel', 'wp_pageviews_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce( 'wp-pageviews-nonce' ),
      ));
      wp_enqueue_script('trsSearchHotel');
      return $output;
    }
    add_shortcode('thairoom-search-hotel', 'renderDivID');
  }
}

?>