
describe('Login Component', () => {
  beforeEach(() => {
    // Assuming your Angular app runs on localhost:4200
    cy.visit('http://localhost:4200/login');
  });

  it('should display the login page correctly', () => {
    cy.contains('LOGIN'); // Assuming the login page contains a heading with text 'Login'
    cy.get('[formControlName="userName"]').should('be.visible');
    cy.get('[formControlName="password"]').should('be.visible');
    cy.contains('LOGIN').should('be.visible');
  });

  it('should show an error message for invalid credentials', () => {
    cy.get('[formControlName="userName"]').type('invalid_user');
    cy.get('[formControlName="password"]').type('invalid_password');
    cy.contains('LOGIN').click();
   
  });

  it('should log in successfully with valid credentials', () => {
    const userName = 'valid_user';
    const password = 'valid_password';
    cy.get('[formControlName="userName"]').type(userName);
    cy.get('[formControlName="password"]').type(password);
    cy.contains('LOGIN').click();

    
  });
});
