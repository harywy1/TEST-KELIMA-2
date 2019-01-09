describe('Test Recent', function() {
    it('Menuju recent', function() {
      cy.visit('http://localhost:3000/src/component/Recent.js')
      cy.get('.recent')
      cy.get('.MuiList-root-245 > :nth-child(2)').contains('Billy Davidson')
      cy.get('.MuiList-root-245 > :nth-child(3)').contains('Alghazali')
   
   
    })   
})