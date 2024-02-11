<?php

namespace Prox;

/**
 * Class ProxMain
 *
 * The ProxMain class is responsible for initializing the class, registering scripts, and adding admin menu items.
 */
class ProxMain {

	public function __construct() {
		$this->init();
	}

	/**
	 * Sets up the initialization of the class.
	 *
	 * This method is responsible for registering scripts and adding admin menu items.
	 *
	 * @return void
	 */
	public function init(): void {
		$this->registerScripts();
		$this->addAdminMenu();
	}

	/**
	 * Registers scripts for use in WordPress front-end.
	 *
	 * This method adds an action hook to enqueue scripts using the 'wp_enqueue_scripts' hook.
	 * The 'enqueue_scripts' method in this class is hooked to the 'wp_enqueue_scripts' action.
	 *
	 * @return void
	 */
	private function registerScripts(): void {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}

	/**
	 * Add an admin menu item.
	 *
	 * This method adds an admin menu item by hooking into the 'admin_menu' action.
	 *
	 * @return void
	 */
	private function addAdminMenu(): void {
		add_action( 'admin_menu', array( $this, 'prox_admin_menu' ) );
	}

	/**
	 * Enqueue scripts method.
	 *
	 * This method enqueues a style by calling the `wp_enqueue_style` function with the given parameters.
	 *
	 * @return void
	 */
	public function enqueue_scripts(): void {
		// Check if the bundle.min.js file exists.
		if ( ! file_exists( plugin_dir_path( __FILE__ ) . '/assets/dist/bundle.min.js' ) ) {
			die( 'The bundle.min.js file does not exist.');
		}

		// Enqueue your script.
		wp_enqueue_script(
			'prox-social-influence',
			plugins_url('/assets/dist/bundle.min.js', __FILE__),
			array(),
			filemtime(plugin_dir_path(__FILE__). '/assets/dist/bundle.min.js'),
			true
		);

		// Enqueue your stylesheet
		wp_enqueue_style(
			'prox-social-influence-css',
			plugins_url('/assets/dist/main.css', __FILE__),
			array(),
			filemtime(plugin_dir_path(__FILE__). '/assets/dist/main.css')
		);
	}

	/**
	 * Add the Social Influence admin menu item.
	 *
	 * This method utilizes the `add_menu_page()` function to add the Social Influence admin menu item.
	 * The menu item has the title "Social Influence" and is accessible to users with the "manage_options" capability.
	 * The menu item uses the slug "social-influence" and has no associated function callback.
	 * The menu item icon is set to "dashicons-networking" and it is positioned in the 2nd position in the admin menu.
	 *
	 * @return void
	 */
	public function prox_admin_menu(): void {
		add_menu_page(
			'Social Influence',
			'Social Influence',
			'manage_options',
			'social-influence',
			array( $this, 'prox_admin_page' ),
			'dashicons-networking',
			'2'
		);
	}

	/**
	 * The Social Influence admin page.
	 *
	 * This method is the callback function for the Social Influence admin menu item.
	 * It outputs the HTML for the admin page.
	 *
	 * @return void
	 */
	public function prox_admin_page(): void {
		echo '<div id="prox_social_influence"></div>';
	}
}
