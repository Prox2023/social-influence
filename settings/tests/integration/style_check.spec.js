const baseUrl = 'http://localhost:8888/wp-admin/';
describe('Social Influence', () => {
	before(function () {
		cy.visit('http://localhost:8888/wp-login.php', { failOnStatusCode: false }) // if the login page is at '/login'
		cy.get('input[name=log]').type('admin') // replace with actual username
		cy.get('input[name=pwd]').type('password') // replace with actual password
		cy.get('input#wp-submit').click()  // make sure this matches your login form
	})

	it('successfully loads', () => {
		// Visit your page
		cy.visit('http://localhost:8888/wp-admin') // Replace 'your_page_url' with the actual URL

		// Check if 'prox-social-influence' script is loaded
		cy.request('wp-content/plugins/social-influence/assets/dist/bundle.min.js').then((response) => {
			// the server sends back the correct headers
			// (this example uses an script file, but the same principles apply to style files)
			expect(response.status).to.eq(200);
			expect(response.headers).to.have.property('content-type', 'text/javascript');
		});

		// Check if 'prox-style' CSS is loaded
		cy.request('wp-content/plugins/social-influence/assets/dist/main.css').then((response) => { // replace get_stylesheet_uri() with actual style file path
			expect(response.status).to.eq(200);
			expect(response.headers).to.have.property('content-type', 'text/css');
		});
	});
});
