<?php
/**
 * Prox Main Class
 * This file establishes the Main functionality for the Prox application.
 *
 * @package    Prox
 * @subpackage Prox_Main
 * @author     Prox-web<support@prox-web.nl>
 * @copyright  2024 Prox-web
 * @license    MIT
 * @since      1.0.0
 */

namespace Prox;

/**
 * Prox Main Class
 *
 * Initializes the Prox application by registering necessary actions, hooks, and filters within WordPress.
 *
 * @package    Prox
 * @subpackage Prox_Main
 * @author     Prox-web <support@prox-web.nl>
 * @since      1.0.0
 */
class Prox_Main {



	/**
	 * Prox_Main constructor.
	 *
	 * Initializes the class by hooking into the WordPress 'init' action.
	 * The 'init' action gets fired after WordPress has finished loading but before any headers
	 * are sent.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		// Hook into 'init' action.
		add_action( 'init', array( $this, 'init' ) );
	}//end __construct()


	/**
	 * Initializes the Prox application.
	 *
	 * 'init' method is responsible for setting up the software by registering necessary actions, hooks, and filters within WordPress.
	 *
	 * @since 1.0.0
	 */
	public function init() {
		// Enqueue scripts for the admin area.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}//end init()


	/**
	 * Enqueues the stylesheets and scripts for the admin area.
	 *
	 * This function should load any CSS or JS scripts required by the Prox application into the WordPress admin area.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_scripts() {
		// Enqueue Prox Custom Styles.
		wp_enqueue_style( 'prox-style', get_stylesheet_uri() );
	}//end enqueue_scripts()
}//end class
