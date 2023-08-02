describe('Application Form Validations', () => {
    beforeEach(() => {
      // Assuming your Angular app runs on localhost:4200
      cy.visit('http://localhost:4200/userdetails');
    });
  
    it('should display validation errors for empty required fields', () => {
      cy.get('[formControlName="fName"]').type('nikita'); 
      cy.get('[formControlName="lName"]').type('naruka'); 
      cy.get('[formControlName="dob"]').type('2001-07-17'); 
      cy.get('[id="submitDetails"]').click(); // Click the submit button
  
    
    });
  
  
    it('should display validation error for invalid loan amount', () => {
      cy.get('[formControlName="amount"]').type('0'); // Enter an invalid loan amount (0)
      cy.get('[id="submitDetails"]').click(); // Click the submit button
  
     
    });
     
  });
  

  