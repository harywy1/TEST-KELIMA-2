describe('Test Cypress soal 5', function()  {
    
    it('Menuju ke situs', function() {
        cy.visit('http://localhost:3000')
    })

    it('FOLLOWERS', () => {
        cy.get('button').contains('FOLLOWERS').click()
        cy.visit('/followers')
})

    it('FAVORITES', () => {
        cy.get('button').contains('FAVORITES').click()
        cy.visit('/favorites')
})

    it('RECENT', () => {
        cy.get('button').contains('RECENT').click()
        cy.visit('/recent')
})

    it('POPULAR', () => {
        cy.get('button').contains('POPULAR').click()
        cy.visit('/popular')
})

})