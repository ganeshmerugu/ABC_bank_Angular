describe('Signup Form', () => {
    beforeEach(() => {
      // Assuming your Angular app runs on localhost:4200
      cy.visit('http://localhost:4200/signup');
    });
  
    it('should display the signup form correctly', () => {
      cy.contains('SIGN UP'); // Assuming the signup page contains a heading with text 'Signup'
      cy.get('[formControlName="firstName"]').should('be.visible');
      cy.get('[formControlName="lastName"]').should('be.visible');
      cy.get('[formControlName="emailId"]').should('be.visible');
      cy.get('[formControlName="phoneNumber"]').should('be.visible');
      cy.get('[formControlName="userName"]').should('be.visible');
      cy.get('[formControlName="password"]').should('be.visible');
      cy.get('[id="signUp"]').should('be.visible'); 
    });
  
    it('should allow users to sign up successfully', () => {
      const user = {
        firstName: 'John',
        lastName: 'Doe',
        emailId: 'john.doe@example.com',
        phoneNumber: '1234567890',
        userName: 'johndoe',
        password: 'securepassword',
      };
  
      cy.get('[formControlName="firstName"]').type(user.firstName);
      cy.get('[formControlName="lastName"]').type(user.lastName);
      cy.get('[formControlName="emailId"]').type(user.emailId);
      cy.get('[formControlName="phoneNumber"]').type(user.phoneNumber);
      cy.get('[formControlName="userName"]').type(user.userName);
      cy.get('[formControlName="password"]').type(user.password);
  
      cy.get('[id="signUp"]').click(); // Click the signup button
  
     
    });
  });
  