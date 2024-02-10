// Constant declarations for clarity and ease of maintenance
let URL_TO_TEST;
const EXPECTED_PAGE_TITLE = 'social-influence';

// Renaming the test suite to a more meaningful name
describe('Title Validation Test', () => {
	// Run this code before each test
	beforeEach(() => {
		// Assign URL before each test
		URL_TO_TEST = Cypress.env('URL_TO_TEST') || 'http://localhost:8888';
	});

	// Renamed the test case to reflect the real purpose of the test
	it('Validates the title of a specific web page', () => {
		// Visit the URL
		cy.visit(URL_TO_TEST);
		// Assert that the title should include the expected title
		cy.title().should('include', EXPECTED_PAGE_TITLE);
	});
});
