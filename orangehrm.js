describe('Orange Suit', () => {
    it('Login Tests', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Enter the username
        cy.get('[name="username"]').type('Admin');

        // Enter the Password
        cy.get('[type="password"]').type('admin123');

        // Click on Login
        cy.get('[type="submit"]').click();

        // After logging in navigating to Admin tab
        cy.get('[href="/web/index.php/admin/viewAdminModule"]').click();

        // Click on Employee search field
        cy.get('[placeholder="Type for hints..."]').type('Ranga  Akunuri');

        // Assert james butler
        cy.get().should('exists', 'James Bulter');

        // Click on logout
        cy.get('[href="/web/index.php/auth/logout"]').click();
        
    });
});