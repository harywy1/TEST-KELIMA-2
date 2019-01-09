describe('Test Followers', function() {
    it('Menuju Followers', function() {
      cy.visit('http://localhost:3000/src/component/Followers.js')
      cy.get('.card').contains('Instagram')
      cy.get('.image')
      cy.get('.avatar').contains('⁂')
      cy.get('.caption').contains('nocapt')
      cy.get('[aria-label="Add to favorites"]')
      cy.get('[aria-label="Comment"]')
      cy.get('[aria-label="Share"]')
      
    })
})